import { parse } from 'postcss-scss';
import type { AtRule, ChildNode, Root, Rule } from 'postcss';
import type { SelectorCandidate } from './selector-analysis';
import { extractDeclaredSelectorCandidates } from './scss-rule-selector-extractor';

function buildFullSelectorCandidates(
	declaredCandidates: readonly SelectorCandidate[],
	parentSelectors: readonly string[],
): SelectorCandidate[] {
	const hasNoParentSelectors: boolean = parentSelectors.length === 0;

	if (hasNoParentSelectors) {
		return [...declaredCandidates];
	}

	return declaredCandidates.flatMap(
		(candidate: SelectorCandidate): SelectorCandidate[] =>
			parentSelectors.map(
				(parentSelector: string): SelectorCandidate => ({
					...candidate,
					selector: `${parentSelector} ${candidate.selector}`,
				}),
			),
	);
}

function extractCandidatesFromAtRule(
	atRule: AtRule,
	scssFile: string,
	parentSelectors: readonly string[],
): SelectorCandidate[] {
	const isNotMediaQuery: boolean = atRule.name !== 'media';

	if (isNotMediaQuery) {
		return [];
	}

	return extractCandidatesFromNodes(
		atRule.nodes ?? [],
		scssFile,
		parentSelectors,
	);
}

function extractCandidatesFromNodes(
	nodes: readonly ChildNode[],
	scssFile: string,
	parentSelectors: readonly string[],
): SelectorCandidate[] {
	return nodes.flatMap((node: ChildNode): SelectorCandidate[] => {
		if (node.type === 'rule') {
			const declaredCandidates: SelectorCandidate[] =
				extractDeclaredSelectorCandidates(node, scssFile);

			const fullCandidates: SelectorCandidate[] = buildFullSelectorCandidates(
				declaredCandidates,
				parentSelectors,
			);

			const currentSelectors: string[] = fullCandidates.map(
				(candidate: SelectorCandidate): string => candidate.selector,
			);

			const nestedCandidates: SelectorCandidate[] = extractCandidatesFromNodes(
				node.nodes,
				scssFile,
				currentSelectors,
			);

			const hasNoDirectStyleContent: boolean = !hasDirectStyleContent(node);
			const extractedCurrentCandidates: SelectorCandidate[] =
				hasNoDirectStyleContent ? [] : fullCandidates;

			return [...extractedCurrentCandidates, ...nestedCandidates];
		}

		if (node.type === 'atrule') {
			return extractCandidatesFromAtRule(node, scssFile, parentSelectors);
		}

		return [];
	});
}

function isDeclarationOrMixinInclusion(node: ChildNode): boolean {
	const isDeclaration: boolean = node.type === 'decl';

	const isMixinInclusion: boolean =
		node.type === 'atrule' && node.name === 'include';

	return isDeclaration || isMixinInclusion;
}

function hasDirectStyleContent(rule: Rule): boolean {
	return rule.nodes.some(isDeclarationOrMixinInclusion);
}

export function extractSelectorCandidatesFromScss(
	scssContent: string,
	scssFile: string,
): SelectorCandidate[] {
	const root: Root = parse(scssContent, {
		from: scssFile,
	});

	return extractCandidatesFromNodes(root.nodes, scssFile, []);
}

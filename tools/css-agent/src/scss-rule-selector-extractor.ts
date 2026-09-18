import type { Rule } from 'postcss';
import selectorParser from 'postcss-selector-parser';
import type { Root, Selector } from 'postcss-selector-parser';
import type { SelectorCandidate } from './selector-analysis';

export function extractDeclaredSelectorCandidates(
	rule: Rule,
	scssFile: string,
): SelectorCandidate[] {
	const selectorRoot: Root = selectorParser().astSync(rule.selector);
	const ruleLine: number = rule.source?.start?.line ?? -1;

	const hasNoRuleLine: boolean = ruleLine === -1;

	if (hasNoRuleLine) {
		throw new Error('Missing SCSS rule source line');
	}

	return selectorRoot.nodes.map((selector: Selector): SelectorCandidate => {
		const selectorLine: number = selector.first?.source?.start?.line ?? -1;

		const hasNoSelectorLine: boolean = selectorLine === -1;

		if (hasNoSelectorLine) {
			throw new Error('Missing selector source line');
		}

		const lineNumber: number = ruleLine + selectorLine - 1;
		return {
			selector: selector.toString().trim(),
			source: {
				file: scssFile,
				line: lineNumber,
			},
		};
	});
}

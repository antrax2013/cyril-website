import type { SelectorCandidate } from './selector-analysis';

function buildFullSelectorCandidates(
	declaredCandidates: readonly SelectorCandidate[],
	selectorStack: readonly string[][],
): SelectorCandidate[] {
	const parentSelectors: string[] | undefined =
		selectorStack[selectorStack.length - 1];

	const hasNoParentSelectors: boolean = (parentSelectors?.length ?? 0) === 0;

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

function countClosedSelector(line: string): number {
	return line.split('}').length - 1;
}

function getDeclaredSelector(line: string): string {
	return line.slice(0, line.indexOf('{')).trim();
}

function getGroupedSelector(line: string): string {
	return line.slice(0, line.lastIndexOf(',')).trim();
}

function getPendingGroupedCandidateResult(
	line: string,
	scssFile: string,
	lineNumber: number,
	pendingGroupedCandidates: readonly SelectorCandidate[],
): {
	isGroupedSelector: boolean;
	updatedPendingGroupedCandidates: SelectorCandidate[];
} {
	const isNotGroupedSelector: boolean = !isGroupedSelectorLine(line);

	if (isNotGroupedSelector) {
		return {
			isGroupedSelector: false,
			updatedPendingGroupedCandidates: [...pendingGroupedCandidates],
		};
	}

	const groupedCandidate: SelectorCandidate = {
		selector: getGroupedSelector(line),
		source: {
			file: scssFile,
			line: lineNumber,
		},
	};

	return {
		isGroupedSelector: true,
		updatedPendingGroupedCandidates: [
			...pendingGroupedCandidates,
			groupedCandidate,
		],
	};
}

function getSelectorDeclarationResult(
	line: string,
	scssFile: string,
	lineNumber: number,
	selectorStack: readonly string[][],
	pendingGroupedCandidates: readonly SelectorCandidate[],
): {
	extractedCandidates: SelectorCandidate[];
	updatedSelectorStack: string[][];
	remainingGroupedCandidates: SelectorCandidate[];
} {
	const isNotSelectorDeclaration: boolean = !isSelectorDeclaration(line);

	if (isNotSelectorDeclaration) {
		return {
			extractedCandidates: [],
			updatedSelectorStack: [...selectorStack],
			remainingGroupedCandidates: [...pendingGroupedCandidates],
		};
	}

	const currentCandidate: SelectorCandidate = {
		selector: getDeclaredSelector(line),
		source: {
			file: scssFile,
			line: lineNumber,
		},
	};

	const declaredCandidates: SelectorCandidate[] = [
		...pendingGroupedCandidates,
		currentCandidate,
	];

	const fullSelectorCandidates: SelectorCandidate[] =
		buildFullSelectorCandidates(declaredCandidates, selectorStack);

	const openedSelectors: string[] = fullSelectorCandidates.map(
		(candidate: SelectorCandidate): string => candidate.selector,
	);

	return {
		extractedCandidates: fullSelectorCandidates,
		updatedSelectorStack: [...selectorStack, openedSelectors],
		remainingGroupedCandidates: [],
	};
}

function getSelectorStackForMediaQuery(
	line: string,
	selectorStack: readonly string[][],
): string[][] {
	const isNotMediaQuery: boolean = !isMediaQueryDeclaration(line);

	if (isNotMediaQuery) {
		return [...selectorStack];
	}

	const parentSelectors: string[] =
		selectorStack[selectorStack.length - 1] ?? [];

	return [...selectorStack, [...parentSelectors]];
}

function isGroupedSelectorLine(line: string): boolean {
	return line.trimStart().startsWith('.') && line.trimEnd().endsWith(',');
}

function isMediaQueryDeclaration(line: string): boolean {
	return /^@media\b/.test(line.trimStart()) && line.includes('{');
}

function isSelectorDeclaration(line: string): boolean {
	return line.trimStart().startsWith('.') && line.includes('{');
}

function removeClosedSelectorsFromStack(
	line: string,
	selectorStack: readonly string[][],
): string[][] {
	const closingBraceCount: number = countClosedSelector(line);

	const remainingSelectorCount: number = Math.max(
		0,
		selectorStack.length - closingBraceCount,
	);

	return selectorStack.slice(0, remainingSelectorCount);
}

export function extractSelectorCandidatesFromScss(
	scssContent: string,
	scssFile: string,
): SelectorCandidate[] {
	const lines: string[] = scssContent.split(/\r?\n/);
	let selectorStack: string[][] = [];
	let pendingGroupedCandidates: SelectorCandidate[] = [];

	const candidates: SelectorCandidate[] = lines.flatMap(
		(line: string, index: number): SelectorCandidate[] => {
			const lineNumber: number = index + 1;

			const { isGroupedSelector, updatedPendingGroupedCandidates } =
				getPendingGroupedCandidateResult(
					line,
					scssFile,
					lineNumber,
					pendingGroupedCandidates,
				);

			pendingGroupedCandidates = updatedPendingGroupedCandidates;

			if (isGroupedSelector) {
				return [];
			}

			selectorStack = getSelectorStackForMediaQuery(line, selectorStack);

			const {
				extractedCandidates,
				updatedSelectorStack,
				remainingGroupedCandidates,
			} = getSelectorDeclarationResult(
				line,
				scssFile,
				lineNumber,
				selectorStack,
				pendingGroupedCandidates,
			);

			pendingGroupedCandidates = remainingGroupedCandidates;
			selectorStack = removeClosedSelectorsFromStack(
				line,
				updatedSelectorStack,
			);

			return extractedCandidates;
		},
	);

	return candidates;
}

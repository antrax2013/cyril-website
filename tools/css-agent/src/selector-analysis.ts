export type SelectorUsage = 'observed' | 'probable' | 'unreferenced';

export type SelectorProtection = 'protected' | 'reviewable';

export interface SelectorSource {
	file: string;
	line: number;
}

export interface SelectorCandidate {
	selector: string;
	source: SelectorSource;
}

export interface JsxStructureCompatibleEvidence {
	type: 'jsx-structure-compatible';
	matchedClassName: string;
	classNameLocation: SelectorSource;
}

function isJsxStructureCompatibleEvidence(
	item: SelectorEvidence,
): item is JsxStructureCompatibleEvidence {
	return item.type === 'jsx-structure-compatible';
}

export interface DomMatchEvidence {
	type: 'dom-match';
	page: string;
}

function isDomMatchEvidence(item: SelectorEvidence): item is DomMatchEvidence {
	return item.type === 'dom-match';
}

export interface LibraryClassEvidence {
	type: 'library-class';
	library: string;
}

function isLibraryClassEvidence(
	item: SelectorEvidence,
): item is LibraryClassEvidence {
	return item.type === 'library-class';
}

export type SelectorEvidence =
	| JsxStructureCompatibleEvidence
	| DomMatchEvidence
	| LibraryClassEvidence;

export interface SelectorAnalysis extends SelectorCandidate {
	usage: SelectorUsage;
	protection: SelectorProtection;
	protectionReasons: string[];
	evidence: SelectorEvidence[];
}

export function assessSelector(
	candidate: SelectorCandidate,
	evidence: SelectorEvidence[],
): SelectorAnalysis {
	const libraryEvidence = evidence.filter(isLibraryClassEvidence);

	return {
		...candidate,
		usage: getUsage(evidence),
		protection: libraryEvidence.length > 0 ? 'protected' : 'reviewable',
		protectionReasons: libraryEvidence.map(
			(item: LibraryClassEvidence) => `library-class:${item.library}`,
		),
		evidence,
	};
}

function getUsage(evidence: SelectorEvidence[]): SelectorUsage {
	if (evidence.some(isDomMatchEvidence)) {
		return 'observed';
	}

	if (evidence.some(isJsxStructureCompatibleEvidence)) {
		return 'probable';
	}

	return 'unreferenced';
}

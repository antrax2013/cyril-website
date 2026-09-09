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

export type SelectorEvidence =
	| {
			type: 'jsx-structure-compatible';
			file: string;
	  }
	| {
			type: 'dom-match';
			page: string;
	  }
	| {
			type: 'library-class';
			library: string;
	  };

export interface SelectorAnalysis extends SelectorCandidate {
	usage: SelectorUsage;
	protection: SelectorProtection;
	protectionReasons: string[];
	evidence: SelectorEvidence[];
}

export function analyzeSelector(
	candidate: SelectorCandidate,
	evidence: SelectorEvidence[],
): SelectorAnalysis {
	const libraryEvidence = evidence.filter(
		(item): item is Extract<SelectorEvidence, { type: 'library-class' }> =>
			item.type === 'library-class',
	);

	return {
		...candidate,
		usage: inferUsage(evidence),
		protection: libraryEvidence.length > 0 ? 'protected' : 'reviewable',
		protectionReasons: libraryEvidence.map(
		(item) => `library-class:${item.library}`,
		),
		evidence,
	};
}

function inferUsage(evidence: SelectorEvidence[]): SelectorUsage {
	if (evidence.some((item) => item.type === 'dom-match')) {
		return 'observed';
	}

	if (evidence.some((item) => item.type === 'jsx-structure-compatible')) {
		return 'probable';
	}

	return 'unreferenced';
}

import {
	findDomMatchEvidenceInPages,
	type RenderedPage,
} from './dom-match-evidence-finder';
import {
	assessSelector,
	DomMatchEvidence,
	type SelectorAnalysis,
	type SelectorCandidate,
} from './selector-analysis';

export function assessSelectorCandidateAgainstRenderedPages(
	candidate: SelectorCandidate,
	renderedPages: readonly RenderedPage[],
): SelectorAnalysis {
	const evidence: DomMatchEvidence[] = findDomMatchEvidenceInPages(
		candidate.selector,
		renderedPages,
	);

	return assessSelector(candidate, evidence);
}

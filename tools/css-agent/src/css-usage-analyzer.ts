import type { RenderedPage } from './dom-match-evidence-finder';
import { loadRenderedPagesFromDirectory } from './rendered-page-loader';
import { assessSelectorCandidateAgainstRenderedPages } from './rendered-pages-selector-analyzer';
import { extractSelectorCandidatesFromScssDirectory } from './scss-directory-selector-extractor';
import {
	findReviewableUnreferencedSelectors,
	type SelectorAnalysis,
	type SelectorCandidate,
} from './selector-analysis';

export async function analyzeCssUsage(
	scssDirectory: string,
	htmlDirectory: string,
): Promise<SelectorAnalysis[]> {
	const [candidates, renderedPages]: [SelectorCandidate[], RenderedPage[]] =
		await Promise.all([
			extractSelectorCandidatesFromScssDirectory(scssDirectory),
			loadRenderedPagesFromDirectory(htmlDirectory),
		]);

	return candidates.map((candidate: SelectorCandidate): SelectorAnalysis =>
		assessSelectorCandidateAgainstRenderedPages(candidate, renderedPages),
	);
}

export async function findReviewableUnreferencedCssSelectors(
	scssDirectory: string,
	htmlDirectory: string,
): Promise<SelectorAnalysis[]> {
	const analyses: SelectorAnalysis[] = await analyzeCssUsage(
		scssDirectory,
		htmlDirectory,
	);

	return findReviewableUnreferencedSelectors(analyses);
}

import type { DomMatchEvidence } from './selector-analysis';

export interface RenderedPage {
	page: string;
	document: Document;
}

export function findDomMatchEvidence(
	selector: string,
	page: string,
	renderedPage: Document,
): DomMatchEvidence[] {
	const matchingElement: Element | null = renderedPage.querySelector(selector);

	const hasNoMatchingElement: boolean = matchingElement === null;

	if (hasNoMatchingElement) {
		return [];
	}

	return [
		{
			type: 'dom-match',
			page,
		},
	];
}

export function findDomMatchEvidenceInPages(
	selector: string,
	renderedPages: readonly RenderedPage[],
): DomMatchEvidence[] {
	return renderedPages.flatMap(
		(renderedPage: RenderedPage): DomMatchEvidence[] =>
			findDomMatchEvidence(selector, renderedPage.page, renderedPage.document),
	);
}

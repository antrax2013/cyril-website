// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import type { RenderedPage } from '../src/dom-match-evidence-finder';
import { assessSelectorCandidateAgainstRenderedPages } from '../src/rendered-pages-selector-analyzer';
import type {
	SelectorAnalysis,
	SelectorCandidate,
} from '../src/selector-analysis';

describe('assessSelectorCandidateAgainstRenderedPages', () => {
	const htmlWithParagraphNestedInArticle = [
		'<main>',
		'\t<article class="article">',
		'\t\t<p>Content</p>',
		'\t</article>',
		'</main>',
	].join('\n');

	it('classifies a selector observed in a rendered page', () => {
		// Given
		const renderedDocumentName: string = '/any-page';
		const renderedDocument: Document =
			document.implementation.createHTMLDocument();
		renderedDocument.body.innerHTML = htmlWithParagraphNestedInArticle;

		const anyLineNumber: number = 42;
		const expectedCandidate: SelectorCandidate = {
			selector: '.article p',
			source: {
				file: 'any-file.scss',
				line: anyLineNumber,
			},
		};

		const renderedPages: RenderedPage[] = [
			{
				page: renderedDocumentName,
				document: renderedDocument,
			},
		];

		// When
		const analysis: SelectorAnalysis =
			assessSelectorCandidateAgainstRenderedPages(
				expectedCandidate,
				renderedPages,
			);

		// Then
		expect(analysis).toEqual({
			...expectedCandidate,
			usage: 'observed',
			protection: 'reviewable',
			protectionReasons: [],
			evidence: [
				{
					type: 'dom-match',
					page: renderedDocumentName,
				},
			],
		});
	});
});

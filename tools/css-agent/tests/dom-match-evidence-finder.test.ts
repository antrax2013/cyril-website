// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import {
	findDomMatchEvidence,
	findDomMatchEvidenceInPages,
	type RenderedPage,
} from '../src/dom-match-evidence-finder';
import type { DomMatchEvidence } from '../src/selector-analysis';

describe('findDomMatchEvidence', () => {
	const htmlWithParagraphNestedInArticle = [
		'<main>',
		'\t<article class="article">',
		'\t\t<p>Content</p>',
		'\t</article>',
		'</main>',
	].join('\n');

	const htmlWithParagraphWithoutArticle = [
		'<main>',
		'\t<p>Content</p>',
		'</main>',
	].join('\n');

	const htmlWithParagraphOutsideArticle = [
		'<main>',
		'\t<article class="article"></article>',
		'\t<p>Content outside the article</p>',
		'</main>',
	].join('\n');

	it('returns DOM match evidence when the selector matches the rendered page', () => {
		// Given
		const renderedPage: Document = document.implementation.createHTMLDocument();

		renderedPage.body.innerHTML = htmlWithParagraphNestedInArticle;

		const searchedSelector: string = '.article p';
		const anyPage: string = '/any-page';

		// When
		const evidence: DomMatchEvidence[] = findDomMatchEvidence(
			searchedSelector,
			anyPage,
			renderedPage,
		);

		// Then
		expect(evidence).toEqual([
			{
				type: 'dom-match',
				page: anyPage,
			},
		]);
	});

	it('returns no evidence when the selector structure does not match the rendered page', () => {
		// Given
		const renderedPage: Document = document.implementation.createHTMLDocument();

		renderedPage.body.innerHTML = htmlWithParagraphWithoutArticle;

		const searchedSelector: string = '.article p';
		const anyPage: string = '/any-page';

		// When
		const evidence: DomMatchEvidence[] = findDomMatchEvidence(
			searchedSelector,
			anyPage,
			renderedPage,
		);

		// Then
		expect(evidence).toEqual([]);
	});

	it('returns evidence only for rendered pages matching the selector', () => {
		// Given
		const nonMatchingDocument: Document =
			document.implementation.createHTMLDocument();
		nonMatchingDocument.body.innerHTML = htmlWithParagraphOutsideArticle;

		const matchingPage: string = '/matchingPage';
		const matchingDocument: Document =
			document.implementation.createHTMLDocument();
		matchingDocument.body.innerHTML = htmlWithParagraphNestedInArticle;

		const renderedPages: RenderedPage[] = [
			{
				page: '/nonMatchingPage',
				document: nonMatchingDocument,
			},
			{
				page: matchingPage,
				document: matchingDocument,
			},
		];

		// When
		const evidence: DomMatchEvidence[] = findDomMatchEvidenceInPages(
			'.article p',
			renderedPages,
		);

		// Then
		expect(evidence).toEqual([
			{
				type: 'dom-match',
				page: matchingPage,
			},
		]);
	});
});

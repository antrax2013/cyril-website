import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import type { RenderedPage } from '../src/dom-match-evidence-finder';
import {
	loadRenderedPage,
	loadRenderedPagesFromDirectory,
} from '../src/rendered-page-loader';

describe('loadRenderedPage', () => {
	it('loads an HTML file as a rendered page', async () => {
		// Given
		const htmlFile: string = fileURLToPath(
			new URL('./workspace/rendered-page-loader/article.html', import.meta.url),
		);
		const page: string = '/article';

		// When
		const renderedPage: RenderedPage = await loadRenderedPage(htmlFile, page);

		// Then
		expect(renderedPage.page).toBe(page);
		expect(renderedPage.document.querySelector('.article p')?.textContent).toBe(
			'Content',
		);
	});

	it('loads HTML files from a directory as rendered pages', async () => {
		// Given
		const htmlDirectory: string = fileURLToPath(
			new URL('./workspace/rendered-page-loader/', import.meta.url),
		);

		// When
		const renderedPages: RenderedPage[] =
			await loadRenderedPagesFromDirectory(htmlDirectory);

		// Then
		expect(renderedPages).toHaveLength(2);
		expect(
			renderedPages
				.map((renderedPage: RenderedPage): string => renderedPage.page)
				.sort(),
		).toEqual(['/', '/article']);

		const articlePage: RenderedPage | undefined = renderedPages.find(
			(renderedPage: RenderedPage): boolean => renderedPage.page === '/article',
		);

		expect(articlePage?.document.querySelector('.article p')?.textContent).toBe(
			'Content',
		);
	});
});

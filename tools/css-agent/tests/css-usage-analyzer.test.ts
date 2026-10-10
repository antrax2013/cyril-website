import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
	analyzeCssUsage,
	findReviewableUnreferencedCssSelectors,
} from '../src/css-usage-analyzer';
import type { SelectorAnalysis } from '../src/selector-analysis';

describe('analyzeCssUsage', () => {
	it('analyzes SCSS selectors against rendered HTML pages', async () => {
		// Given
		const scssDirectory: string = fileURLToPath(
			new URL('./workspace/css-usage-analyzer/scss/', import.meta.url),
		);
		const htmlDirectory: string = fileURLToPath(
			new URL('./workspace/css-usage-analyzer/html/', import.meta.url),
		);

		// When
		const analyses: SelectorAnalysis[] = await analyzeCssUsage(
			scssDirectory,
			htmlDirectory,
		);

		// Then
		expect(analyses).toEqual([
			{
				selector: '.article p',
				source: {
					file: 'styles.scss',
					line: 1,
				},
				usage: 'observed',
				protection: 'reviewable',
				protectionReasons: [],
				evidence: [
					{
						type: 'dom-match',
						page: '/article',
					},
				],
			},
		]);
	});

	it('returns only reviewable selectors without usage evidence', async () => {
		// Given
		const scssDirectory: string = fileURLToPath(
			new URL(
				'./workspace/unreferenced-css-selector-finder/scss/',
				import.meta.url,
			),
		);
		const htmlDirectory: string = fileURLToPath(
			new URL(
				'./workspace/unreferenced-css-selector-finder/html/',
				import.meta.url,
			),
		);

		// When
		const analyses: SelectorAnalysis[] =
			await findReviewableUnreferencedCssSelectors(
				scssDirectory,
				htmlDirectory,
			);

		// Then
		expect(analyses).toEqual([
			{
				selector: '.unused',
				source: {
					file: 'styles.scss',
					line: 4,
				},
				usage: 'unreferenced',
				protection: 'reviewable',
				protectionReasons: [],
				evidence: [],
			},
		]);
	});
});

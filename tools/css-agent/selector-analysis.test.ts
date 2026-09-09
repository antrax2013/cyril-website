import { describe, expect, it } from 'vitest';
import { analyzeSelector, type SelectorCandidate } from './selector-analysis';

describe('analyzeSelector', () => {
	it('classifies a selector compatible with the JSX structure as probable', () => {
		// Given
		const probableCandidate: SelectorCandidate = {
			selector: '.QuiSuisJe .paragraphe-1',
			source: {
				file: 'src/scss/routes/QuiSuisJe.scss',
				line: 3,
			},
		};

		// When
		const analysis = analyzeSelector(probableCandidate, [
			{
				type: 'jsx-structure-compatible',
				file: 'src/components/routes/Qui-suis-je.tsx',
			},
		]);

		// Then
		expect(analysis).toEqual({
			...probableCandidate,
			usage: 'probable',
			protection: 'reviewable',
			protectionReasons: [],
			evidence: [
				{
					type: 'jsx-structure-compatible',
					file: 'src/components/routes/Qui-suis-je.tsx',
				},
			],
		});
	});

	it('keeps a PrimeReact selector protected even when it is observed', () => {
		// Given
		const primeProtectedCandidate: SelectorCandidate = {
			selector: '.p-dialog-center .p-dialog-content',
			source: {
				file: 'src/scss/tools/CustomDialog.scss',
				line: 1,
			},
		};

		// When
		const analysis = analyzeSelector(primeProtectedCandidate, [
			{ type: 'dom-match', page: '/contact' },
			{ type: 'library-class', library: 'primereact' },
		]);

		// Then
		expect(analysis.usage).toBe('observed');
		expect(analysis.protection).toBe('protected');
		expect(analysis.protectionReasons).toEqual(['library-class:primereact']);
	});

	it('marks a selector without usage evidence as unreferenced', () => {
		// Given
		const fictionalUnreferencedCandidate: SelectorCandidate = {
			selector: '.fictional-page .fictional-title',
			source: { file: 'src/scss/index.scss', line: 100 },
		};

		// When
		const analysis = analyzeSelector(fictionalUnreferencedCandidate, []);

		// Then
		expect(analysis.usage).toBe('unreferenced');
		expect(analysis.protection).toBe('reviewable');
	});
});

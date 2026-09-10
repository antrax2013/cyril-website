import { describe, expect, it } from 'vitest';
import {
	assessSelector,
	SelectorEvidence,
	type SelectorCandidate,
} from './selector-analysis';

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

		const jsxStructureEvidence: SelectorEvidence = {
			type: 'jsx-structure-compatible',
			matchedClassName: 'paragraphe-1',
			classNameLocation: {
				file: 'src/components/routes/Qui-suis-je.tsx',
				line: 15,
			},
		};

		// When
		const analysis = assessSelector(probableCandidate, [jsxStructureEvidence]);

		// Then
		expect(analysis.usage).toBe('probable');
		expect(analysis.protection).toBe('reviewable');
		expect(analysis.protectionReasons).toEqual([]);
		expect(analysis.evidence).toEqual([jsxStructureEvidence]);
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

		const primeLibraryEvidence: SelectorEvidence = {
			type: 'library-class',
			library: 'primereact',
		};

		const domMatchEvidence: SelectorEvidence = {
			type: 'dom-match',
			page: '/contact',
		};

		// When
		const analysis = assessSelector(primeProtectedCandidate, [
			domMatchEvidence,
			primeLibraryEvidence,
		]);

		// Then
		expect(analysis.usage).toBe('observed');
		expect(analysis.protection).toBe('protected');
		expect(analysis.protectionReasons).toEqual(['library-class:primereact']);
		expect(analysis.evidence).toEqual([domMatchEvidence, primeLibraryEvidence]);
	});

	it('marks a selector without usage evidence as unreferenced', () => {
		// Given
		const fictionalUnreferencedCandidate: SelectorCandidate = {
			selector: '.fictional-page .fictional-title',
			source: { file: 'src/scss/index.scss', line: 100 },
		};

		// When
		const analysis = assessSelector(fictionalUnreferencedCandidate, []);

		// Then
		expect(analysis.usage).toBe('unreferenced');
		expect(analysis.protection).toBe('reviewable');
		expect(analysis.protectionReasons).toEqual([]);
		expect(analysis.evidence).toEqual([]);
	});
});

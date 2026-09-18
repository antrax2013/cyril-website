import { describe, expect, it } from 'vitest';
import {
	assessSelector,
	SelectorEvidence,
	type SelectorCandidate,
} from './../src/selector-analysis';

describe('assessSelector', () => {
	const anyScssFile: string = 'any-file.scss';
	const anyPageName: string = '/any-page';
	const anyLineNumber: number = 42;
	const anySelector: string = '.any-selector';
	const anyLibraryName: string = 'any-library';
	const anyClassName: string = 'any-class';
	const anyJsxFile: string = 'any-component.tsx';

	const anyCandidate: SelectorCandidate = {
		selector: anySelector,
		source: {
			file: anyScssFile,
			line: anyLineNumber,
		},
	};

	it('classifies a selector compatible with the JSX structure as probable', () => {
		// Given
		const jsxStructureEvidence: SelectorEvidence = {
			type: 'jsx-structure-compatible',
			matchedClassName: anyClassName,
			classNameLocation: {
				file: anyJsxFile,
				line: anyLineNumber,
			},
		};

		// When
		const analysis = assessSelector(anyCandidate, [jsxStructureEvidence]);

		// Then
		expect(analysis.usage).toBe('probable');
		expect(analysis.protection).toBe('reviewable');
		expect(analysis.protectionReasons).toEqual([]);
		expect(analysis.evidence).toEqual([jsxStructureEvidence]);
	});

	it('keeps a library selector protected even when it is observed', () => {
		// Given
		const primeLibraryEvidence: SelectorEvidence = {
			type: 'library-class',
			library: anyLibraryName,
		};

		const domMatchEvidence: SelectorEvidence = {
			type: 'dom-match',
			page: anyPageName,
		};

		// When
		const analysis = assessSelector(anyCandidate, [
			domMatchEvidence,
			primeLibraryEvidence,
		]);

		// Then
		expect(analysis.usage).toBe('observed');
		expect(analysis.protection).toBe('protected');
		expect(analysis.protectionReasons).toEqual([
			`library-class:${anyLibraryName}`,
		]);
		expect(analysis.evidence).toEqual([domMatchEvidence, primeLibraryEvidence]);
	});

	it('marks a selector without usage evidence as unreferenced', () => {
		// When
		const analysis = assessSelector(anyCandidate, []);

		// Then
		expect(analysis.usage).toBe('unreferenced');
		expect(analysis.protection).toBe('reviewable');
		expect(analysis.protectionReasons).toEqual([]);
		expect(analysis.evidence).toEqual([]);
	});
});

import { describe, expect, it } from 'vitest';
import { extractSelectorCandidatesFromScss } from './../src/scss-selector-extractor';
import type { SelectorCandidate } from './../src/selector-analysis';

describe('extractSelectorCandidatesFromScss', () => {
	const anyScssFile: string = 'any-file.scss';
	const anyMixinName: string = 'any-mixin';

	it('extracts a root selector from SCSS', () => {
		// Given
		const scssContent: string = ['.QuiSuisJe {', '\tcolor: red;', '}'].join(
			'\n',
		);

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.QuiSuisJe',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});

	it('extracts multiple root selectors from SCSS', () => {
		// Given
		const scssContent: string = [
			'.QuiSuisJe {',
			'\tcolor: red;',
			'}',
			'',
			'.article {',
			'\tmargin: 1rem;',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.QuiSuisJe',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
			{
				selector: '.article',
				source: {
					file: anyScssFile,
					line: 5,
				},
			},
		]);
	});

	it('combines a nested selector with its parent selector', () => {
		// Given
		const scssContent: string = [
			'.QuiSuisJe {',
			'\t.paragraphe-1 {',
			'\t\tcolor: red;',
			'\t}',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.QuiSuisJe .paragraphe-1',
				source: {
					file: anyScssFile,
					line: 2,
				},
			},
		]);
	});

	it('extracts root selectors declared as a multiline group', () => {
		// Given
		const scssContent: string = [
			'.title,',
			'.subtitle {',
			'\tcolor: red;',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.title',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
			{
				selector: '.subtitle',
				source: {
					file: anyScssFile,
					line: 2,
				},
			},
		]);
	});

	it('combines a nested selector with every grouped parent selector', () => {
		// Given
		const scssContent: string = [
			'.title,',
			'.subtitle {',
			'\tcolor: red;',
			'',
			'\t.content {',
			'\t\tmargin: 1rem;',
			'\t}',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.title',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
			{
				selector: '.subtitle',
				source: {
					file: anyScssFile,
					line: 2,
				},
			},
			{
				selector: '.title .content',
				source: {
					file: anyScssFile,
					line: 5,
				},
			},
			{
				selector: '.subtitle .content',
				source: {
					file: anyScssFile,
					line: 5,
				},
			},
		]);
	});

	it('keeps the parent selector after closing a nested media query', () => {
		// Given
		const scssContent: string = [
			'.page {',
			'\t@media (max-width: 768px) {',
			'\t\t.title { color: blue; }',
			'\t}',
			'',
			'\t.content { margin: 1rem; }',
			'}',
		].join('\n');

		const expectedCandidates: SelectorCandidate[] = [
			{
				selector: '.page .title',
				source: {
					file: anyScssFile,
					line: 3,
				},
			},
			{
				selector: '.page .content',
				source: {
					file: anyScssFile,
					line: 6,
				},
			},
		];

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual(expectedCandidates);
	});

	it('extracts a selector inside a root media query', () => {
		// Given
		const scssContent: string = [
			'@media (max-width: 768px) {',
			'\t.title {',
			'\t\tcolor: red;',
			'\t}',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.title',
				source: {
					file: anyScssFile,
					line: 2,
				},
			},
		]);
	});

	it('extracts an element selector nested inside a class selector', () => {
		// Given
		const scssContent: string = [
			'.article {',
			'\tp {',
			'\t\tcolor: red;',
			'\t}',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.article p',
				source: {
					file: anyScssFile,
					line: 2,
				},
			},
		]);
	});

	it('extracts grouped nested selectors containing a mixin inclusion', () => {
		// Given
		const anyMixinName: string = 'any-mixin';

		const scssContent: string = [
			`@mixin ${anyMixinName} {`,
			'\tcolor: red;',
			'}',
			'',
			'.Les9RitesMunayKi {',
			'\t.paragraphe-1-1 .paragraphe-content,',
			'\t.paragraphe-1-2 .paragraphe-content {',
			`\t\t@include ${anyMixinName};`,
			'\t}',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.Les9RitesMunayKi .paragraphe-1-1 .paragraphe-content',
				source: {
					file: anyScssFile,
					line: 6,
				},
			},
			{
				selector: '.Les9RitesMunayKi .paragraphe-1-2 .paragraphe-content',
				source: {
					file: anyScssFile,
					line: 7,
				},
			},
		]);
	});

	it('keeps an unstyled parent selector through a nested media query', () => {
		// Given
		const scssContent: string = [
			'.page {',
			'\t@media (min-width: 426px) and (max-width: 691px) {',
			'\t\taside.content ul {',
			'\t\t\tpadding-left: 0;',
			'\t\t}',
			'\t}',
			'}',
		].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.page aside.content ul',
				source: {
					file: anyScssFile,
					line: 3,
				},
			},
		]);
	});

	it('ignores a root SCSS variable declaration', () => {
		// Given
		const anyVariableName: string = '$any-color';
		const anyVariableValue: string = '#196b00';

		const scssContent: string = `${anyVariableName}: ${anyVariableValue};`;

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([]);
	});
});

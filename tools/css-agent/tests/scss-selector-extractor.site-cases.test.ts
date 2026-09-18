import { describe, expect, it } from 'vitest';
import { extractSelectorCandidatesFromScss } from './../src/scss-selector-extractor';
import type { SelectorCandidate } from './../src/selector-analysis';

describe('extractSelectorCandidatesFromScss - site cases', () => {
	const anyScssFile: string = 'any-file.scss';

	it('preserves a child combinator in a nested selector', () => {
		// Given
		const scssContent: string = [
			'.geobiologie {',
			'\t.article > section {',
			'\t\talign-items: center;',
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
				selector: '.geobiologie .article > section',
				source: {
					file: anyScssFile,
					line: 2,
				},
			},
		]);
	});

	it('extracts a custom element selector containing pseudo-classes', () => {
		// Given
		const scssContent: string = [
			'p-component:not(.p-button):focus {',
			'\tborder-color: var(--secondary-color) !important;',
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
				selector: 'p-component:not(.p-button):focus',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});

	it('extracts a multiline selector containing chained not pseudo-classes', () => {
		// Given
		const multilineSelector: string = [
			'.p-button:not(.facebook):not(.linkedin):not(.whatsapp):not(.twitter):not(',
			'\t\t.instagram',
			'\t):not(.bottom-right-fixed):not(.p-button-secondary)',
		].join('\n');

		const scssContent: string = [
			`${multilineSelector} {`,
			'\tbackground: var(--primary-color) !important;',
			'\tborder: var(--primary-color) !important;',
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
				selector: multilineSelector,
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});

	it('extracts a selector combining an element and a class', () => {
		// Given
		const scssContent: string = [
			'img.ImgCC {',
			'\tdisplay: inline-block !important;',
			'\twidth: 75px !important;',
			'\tborder-radius: inherit !important;',
			'\tvertical-align: middle;',
			'\tmargin-right: 0.2em;',
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
				selector: 'img.ImgCC',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});

	it('extracts an anchor selector combined with a class and a mixin inclusion', () => {
		// Given
		const anyMixinName: string = 'mixins.btn-border-rounded';

		const scssContent: string = [
			'a.cta {',
			'\tdisplay: inline-block !important;',
			`\t@include ${anyMixinName};`,
			'\tpadding: 0.4rem 0.8rem;',
			'\tfont-style: italic;',
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
				selector: 'a.cta',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});

	it('extracts an id selector', () => {
		// Given
		const scssContent: string = ['#root {', '\tdisplay: flex;', '}'].join('\n');

		// When
		const candidates: SelectorCandidate[] = extractSelectorCandidatesFromScss(
			scssContent,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '#root',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});

	it('keeps selector arguments grouped inside a not pseudo-class', () => {
		// Given
		const scssContent: string = [
			'a:not(.p-menubar-button, .cta):hover {',
			'\tcolor: var(--primary-color) !important;',
			'\tdisplay: contents;',
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
				selector: 'a:not(.p-menubar-button, .cta):hover',
				source: {
					file: anyScssFile,
					line: 1,
				},
			},
		]);
	});
});

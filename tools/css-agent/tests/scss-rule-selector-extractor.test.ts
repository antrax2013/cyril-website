import { describe, expect, it } from 'vitest';
import { parse } from 'postcss-scss';
import type { Root } from 'postcss';
import type { SelectorCandidate } from '../src/selector-analysis';
import { extractDeclaredSelectorCandidates } from '../src/scss-rule-selector-extractor';

describe('extractDeclaredSelectorCandidates', () => {
	const anyScssFile: string = 'any-file.scss';

	it('preserves file line numbers for selectors in a multiline group', () => {
		// Given
		const scssContent: string = ['', '.title,', '.subtitle {', '}'].join('\n');

		const root: Root = parse(scssContent, {
			from: anyScssFile,
		});

		const rule = root.nodes[0];

		if (rule.type !== 'rule') {
			throw new Error('Expected a SCSS rule in the test setup');
		}

		// When
		const candidates: SelectorCandidate[] = extractDeclaredSelectorCandidates(
			rule,
			anyScssFile,
		);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.title',
				source: { file: anyScssFile, line: 2 },
			},
			{
				selector: '.subtitle',
				source: { file: anyScssFile, line: 3 },
			},
		]);
	});
});

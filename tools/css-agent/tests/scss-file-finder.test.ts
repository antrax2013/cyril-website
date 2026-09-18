import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { findScssFiles } from '../src/scss-file-finder';
import { posix } from 'node:path';
import { extractSelectorCandidatesFromScssDirectory } from '../src/scss-directory-selector-extractor';
import { SelectorCandidate } from '../src/selector-analysis';

describe('findScssFiles', () => {
	const workspaceDirectory: string = fileURLToPath(
		new URL('./workspace/scss-file-finder/', import.meta.url),
	);

	it('finds SCSS files recursively', async () => {
		// When
		const scssFiles: string[] = await findScssFiles(workspaceDirectory);

		// Then
		expect(scssFiles).toEqual([
			posix.join('nested', 'component.scss'),
			'styles.scss',
		]);
	});

	it('extracts selector candidates from SCSS files found recursively', async () => {
		// When
		const candidates: SelectorCandidate[] =
			await extractSelectorCandidatesFromScssDirectory(workspaceDirectory);

		// Then
		expect(candidates).toEqual([
			{
				selector: '.any-selector',
				source: {
					file: posix.join('nested', 'component.scss'),
					line: 1,
				},
			},
			{
				selector: '.any-selector',
				source: {
					file: 'styles.scss',
					line: 1,
				},
			},
		]);
	});
});

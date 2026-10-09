import { readFile } from 'node:fs/promises';
import { posix } from 'node:path';
import { findScssFiles } from './scss-file-finder';
import { extractSelectorCandidatesFromScss } from './scss-selector-extractor';
import type { SelectorCandidate } from './selector-analysis';

async function extractSelectorCandidatesFromScssFile(
	directory: string,
	scssFile: string,
): Promise<SelectorCandidate[]> {
	const scssContent: string = await readFile(
		posix.join(directory, scssFile),
		'utf8',
	);

	return extractSelectorCandidatesFromScss(scssContent, scssFile);
}

export async function extractSelectorCandidatesFromScssDirectory(
	directory: string,
): Promise<SelectorCandidate[]> {
	const scssFiles: string[] = await findScssFiles(directory);

	const candidatesByFile: SelectorCandidate[][] = await Promise.all(
		scssFiles.map((scssFile: string): Promise<SelectorCandidate[]> =>
			extractSelectorCandidatesFromScssFile(directory, scssFile),
		),
	);

	return candidatesByFile.flat();
}

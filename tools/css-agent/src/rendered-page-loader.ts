import { readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import fastGlob from 'fast-glob';
import { JSDOM } from 'jsdom';
import type { RenderedPage } from './dom-match-evidence-finder';

export async function loadRenderedPage(
	htmlFile: string,
	page: string,
): Promise<RenderedPage> {
	const htmlContent: string = await readFile(htmlFile, 'utf8');
	const dom: JSDOM = new JSDOM(htmlContent);

	return {
		page,
		document: dom.window.document,
	};
}

export async function loadRenderedPagesFromDirectory(
	directory: string,
): Promise<RenderedPage[]> {
	const htmlFiles: string[] = await fastGlob('*.html', {
		cwd: directory,
		onlyFiles: true,
	});

	return Promise.all(
		htmlFiles.map(async (htmlFile: string): Promise<RenderedPage> =>
			loadRenderedPage(
				join(directory, htmlFile),
				getPageFromHtmlFile(htmlFile),
			),
		),
	);
}

function getPageFromHtmlFile(htmlFile: string): string {
	const fileName: string = basename(htmlFile, '.html');

	return fileName === 'index' ? '/' : `/${fileName}`;
}

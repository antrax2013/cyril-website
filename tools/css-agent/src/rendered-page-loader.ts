import { readFile } from 'node:fs/promises';
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

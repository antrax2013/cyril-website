import fastGlob from 'fast-glob';

export async function findScssFiles(directory: string): Promise<string[]> {
	const scssFiles: string[] = await fastGlob('**/*.scss', {
		cwd: directory,
		onlyFiles: true,
	});

	return [...scssFiles].sort();
}

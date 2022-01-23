import path from 'path';
import { existsSync } from 'fs';

/**
 * Validate and get the project directory path.
 * Which will be a neighbor of this code base.
 *
 * @param projectName Name of project
 * @throws E003 When directory already exists
 * @returns string
 */
export const getProjectDirectory = (projectName: string): string => {
	const projectDir = path.join(__dirname, "..", "..", "..", projectName);

	if (existsSync(projectDir)) {
		throw new Error(`E003 - Directory: "${projectDir}" already exists`);
	}

	return projectDir;
}

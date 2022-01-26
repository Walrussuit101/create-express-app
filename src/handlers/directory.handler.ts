import path from 'path';
import { existsSync, mkdirSync } from 'fs';
import CustomError from '../models';

/**
 * Validate and get the project directory path.
 * Which will be a neighbor of this code base.
 *
 * @param projectName Name of project
 * @throws CustomError
 * @returns string
 */
export const getProjectDirectory = (projectName: string): string => {
	const projectDir = path.join(__dirname, "..", "..", "..", projectName);

	if (existsSync(projectDir)) {
		throw new CustomError("E003", `Directory : ${projectDir} already exists`);
	}

	return projectDir;
}

/**
 * Create the project directory
 * 
 * @param projectDir Directory of project
 * @returns void
 */
export const createProjectDirectory = (projectDir: string): void => {
	mkdirSync(projectDir)
}
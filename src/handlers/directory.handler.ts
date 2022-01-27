import path from 'path';
import { existsSync, mkdirSync, copySync, renameSync, removeSync } from 'fs-extra';
import CustomError from '../models';

/**
 * Validate and get the project directory path.
 * Which will be a neighbor of this code base.
 *
 * @param projectName Name of project
 * @returns string
 */
export const getProjectDirectory = (projectName: string): string => {
	return path.join(__dirname, "..", "..", "..", projectName);
}

/**
 * Create the project directory
 * 
 * @param projectDir Directory of project
 * @throws CustomError
 * @returns void
 */
export const createProjectDirectory = (projectDir: string): void => {
	if (existsSync(projectDir)) {
		throw new CustomError("E003", `Directory : ${projectDir} already exists`);
	}

	mkdirSync(projectDir)
}

/**
 * Copy template contents into project directory.
 * 
 * @param projectDir Directory of project
 * @param template Template name
 * @returns void
 */
export const copyTemplate = (projectDir: string, template: string): void => {
	// copy contents of template directory to project directory
	const templateDir = path.join(__dirname, "..", "..", "templates", template);
	copySync(templateDir, projectDir);

	// add '.' prefix to gitignore file
	renameSync(path.join(projectDir, "gitignore"), path.join(projectDir, ".gitignore"));
}

/**
 * Delete the project directory.
 * This should only be called when running in dev.
 * 
 * @param projectDir Directory of project
 * @returns void
 */
export const deleteProjectDirectory = (projectDir: string): void => {
	removeSync(projectDir);
}
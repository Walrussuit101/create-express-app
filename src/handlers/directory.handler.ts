import path from 'path';
import { existsSync, mkdirSync, copySync, renameSync, removeSync } from 'fs-extra';
import CustomError from '../models';
import { exec } from 'child_process';
import { Console } from 'console';

/**
 * Get the project directory path.
 * Which will be a neighbor of this code base.
 *
 * @param projectName Name of project
 * @returns string
 */
export const getProjectDirectory = (projectName: string): string => {
	return path.join(__dirname, "..", "..", "..", projectName);
}

/**
 * Validate and create the project directory.
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

/**
 * Initialize a git repository in the project directory.
 * This also creates the initial commit
 * 
 * @param projectDir Directory of Project
 * @returns void
 */
export const initGitRepo = (projectDir: string): void => {
	try {
		//Initialize git
		exec("git -C " +  projectDir + " init;" 
		+ "git -C " + projectDir + "/ add .;"
		+ "git -C "+ projectDir+"/ commit -m \"Initial Commit\";", (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(stdout);
		})
	} catch (error) {
		console.log(error)
	}

}
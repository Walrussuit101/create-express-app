import path from "path";
import { execSync } from "child_process";
import {
    existsSync,
    mkdirSync,
    copySync,
    renameSync,
    removeSync,
    outputJSONSync
} from "fs-extra";

import { CustomError } from "../models";

/**
 * Get the project directory path.
 * Which will be a neighbor of this code base.
 *
 * @param projectName Name of project
 * @returns string
 */
export const getProjectDirectory = (projectName: string): string => {
    return path.join(process.cwd(), "..", projectName);
};

/**
 * Validate and create the project directory.
 *
 * @param projectDir Directory of project
 * @throws CustomError
 * @returns void
 */
export const createProjectDirectory = (projectDir: string): void => {
    if (existsSync(projectDir)) {
        throw new CustomError(
            "E002",
            `Directory "${projectDir}" already exists`
        );
    }

    mkdirSync(projectDir);
};

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
    renameSync(
        path.join(projectDir, "gitignore"),
        path.join(projectDir, ".gitignore")
    );
};

/**
 * Delete the project directory.
 * This should only be called when running in dev.
 *
 * @param projectDir Directory of project
 * @returns void
 */
export const deleteProjectDirectory = (projectDir: string): void => {
    removeSync(projectDir);
};

/**
 * Copy a package object to the project dir as "package.json"
 *
 * @param projectDir Directory of project
 * @param packageObj Package object
 * @returns void
 */
export const copyPackageObj = (projectDir: string, packageObj: any): void => {
    // use 2 space indent for resulting file
    outputJSONSync(path.join(projectDir, "package.json"), packageObj, {
        spaces: 2
    });
};

/**
 * Initialize a git repository in the project directory.
 * This also creates the initial commit
 *
 * @param projectDir Directory of Project
 * @returns void
 */
export const initGitRepo = (projectDir: string): void => {
    execSync(`git -C ${projectDir} init`);
    execSync(`git -C ${projectDir} add .`);
    execSync(`git -C ${projectDir} commit -m "Initial Commit"`);
};

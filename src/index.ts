#!/usr/bin/env node
import { program } from "commander";
import { sync as commandExistsSync } from "command-exists";
import packageFile from "../package.json";

import { argumentsHandler, directoryHandler, packageHandler } from "./handlers";
import { arguments } from "./interfaces";
import { Logger, CustomError } from "./models";
import helpString from "./help";

const logger = new Logger();

let PROJECT_DIR_INFO = {
    projectDir: "",
    wasMade: false
};

const main = (args: arguments) => {
    // get project directory
    const projectDir = directoryHandler.getProjectDirectory(args.projectName);

    // if ran by dev script, delete project directory.
    // dev uses nodemon, which would throw an error b/c
    // project directory was made in the previous execution.
    if (process.env.npm_lifecycle_event === "dev") {
        directoryHandler.deleteProjectDirectory(projectDir);
    }

    // if the project isn't going in the cwd, create the directory
    // and inform user
    if (args.projectName !== ".") {
        logger.info("Creating project directory...");
        directoryHandler.createProjectDirectory(projectDir);
        PROJECT_DIR_INFO.projectDir = projectDir;
        PROJECT_DIR_INFO.wasMade = true;
    }

    // copy template code to project directory
    // and inform user
    logger.info("Copying template...");
    directoryHandler.copyTemplate(projectDir, args.template);

    // build package file, output to project dir, install deps
    logger.info("Installing template's package dependencies...");
    const packageObj = packageHandler.buildPackageObj(
        args.projectName,
        args.template
    );
    directoryHandler.copyPackageObj(projectDir, packageObj);
    packageHandler.installDeps(projectDir, args.template);

    // if the git option was provided, initialize a git repo
    if (args.createGit) {
        // check if git is installed
        if (!commandExistsSync("git"))
            throw new CustomError("E004", "Git not installed");

        directoryHandler.initGitRepo(projectDir);
        logger.info("Git repository initialized with initial commit.");
    }
};

try {
    // setup commander to accept args/options
    program
        .name(packageFile.name)
        .version(packageFile.version)
        .description(packageFile.description)
        .addHelpText("after", helpString)
        .usage("<project_name> <template> [options]")
        .argument("<project_name>", "The name for your project")
        .argument(
            "<template>",
            "The template to use for your project (see valid templates below)"
        )
        .option(
            "--git",
            "Create a git repository & initial commit in your project"
        )
        .action((projectName, template, options) => {
            // clean / build args obj
            const args = argumentsHandler.getArguments(
                projectName,
                template,
                options
            );

            // start main process
            main(args);
        });

    // accept input
    program.parse();
} catch (e: unknown) {
    e instanceof CustomError ? logger.error(e) : console.error(e);

    // if the project directory was made before the error clean it up
    if (PROJECT_DIR_INFO.wasMade)
        directoryHandler.deleteProjectDirectory(PROJECT_DIR_INFO.projectDir);

    process.exit(1);
}

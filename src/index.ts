#!/usr/bin/env node
import { program } from "commander";
import packageFile from "../package.json";

import { argumentsHandler, directoryHandler, packageHandler } from "./handlers";
import { arguments } from "./interfaces";
import CustomError from "./models";
import helpString from "./help";

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

    // create project directory and copy template and
    // log a message that this is happening
    console.log("Creating project directory and copying template...");
    directoryHandler.createProjectDirectory(projectDir);
    PROJECT_DIR_INFO.projectDir = projectDir;
    PROJECT_DIR_INFO.wasMade = true;

    directoryHandler.copyTemplate(projectDir, args.template);

    // build package file, output to project dir, install deps
    console.log("Installing template's package dependencies...");
    const packageObj = packageHandler.buildPackageObj(
        args.projectName,
        args.template
    );
    directoryHandler.copyPackageObj(projectDir, packageObj);
    packageHandler.installDeps(projectDir, args.template);

    // If the git option was provided, initialize a git repo
    if (args.createGit) {
        directoryHandler.initGitRepo(projectDir);
        console.log("Git repository initialized with initial commit...");
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
    e instanceof CustomError ? e.log() : console.error(e);

    // if the project directory was made before the error clean it up
    if (PROJECT_DIR_INFO.wasMade)
        directoryHandler.deleteProjectDirectory(PROJECT_DIR_INFO.projectDir);

    process.exit(1);
}

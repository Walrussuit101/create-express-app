import { exec } from "child_process";
import { Spinner } from "../models";
import chalk from "chalk";

const templateSpecDictionary = {
    static: {
        main: "src/server.ts",
        scripts: {
            start: "npm run compile:client && ts-node src/server.ts",
            dev: 'nodemon -e ts,json,html,css --exec "npm start"',
            "compile:client": "webpack --mode=production --no-stats",
            "compile:client:stats": "webpack --mode=production"
        },
        dependencies: [
            "@types/express",
            "@types/node",
            "express",
            "nodemon",
            "ts-loader",
            "ts-node",
            "typescript",
            "webpack-cli"
        ]
    },
    "rest-api": {
        main: "src/index.ts",
        scripts: {
            start: "ts-node src/index.ts",
            dev: "nodemon -e ts,json --exec 'ts-node src/index.ts'"
        },
        dependencies: [
            "@types/node",
            "@types/express",
            "@types/cors",
            "@types/morgan",
            "@types/express-list-endpoints",
            "dotenv",
            "typescript",
            "ts-node",
            "cors",
            "express",
            "nocache",
            "nodemon",
            "morgan",
            "express-list-endpoints"
        ]
    }
};

/**
 * Build and return the package object
 *
 * @param projectName Given name for project
 * @param template Template name
 * @returns JSON in shape of package.json file
 */
export const buildPackageObj = (projectName: string, template: string) => {
    const packageObj = {
        name: projectName,
        version: "1.0.0",
        main: "",
        scripts: {}
    };

    switch (template) {
        case "static": {
            const templateSpec = templateSpecDictionary[template];
            packageObj.main = templateSpec.main;
            packageObj.scripts = templateSpec.scripts;
            break;
        }

        case "rest-api": {
            const templateSpec = templateSpecDictionary[template];
            packageObj.main = templateSpec.main;
            packageObj.scripts = templateSpec.scripts;
            break;
        }
    }

    return packageObj;
};

/**
 * Install deps for the given template
 *
 * @param projectDir Directory of project
 * @param template Template name
 * @returns void
 */
export const installDeps = async (
    projectDir: string,
    template: string
): Promise<void> => {
    switch (template) {
        case "static":
            for (const dep of templateSpecDictionary[template].dependencies) {
                await installDep(projectDir, dep);
            }
            break;
        case "rest-api":
            for (const dep of templateSpecDictionary[template].dependencies) {
                await installDep(projectDir, dep);
            }
            break;
    }
};

/**
 * Install a specific npm package in a given directory
 *
 * @param projectDir Directory of project
 * @param dep Name of dependency to install
 * @returns void
 */
export const installDep = async (
    projectDir: string,
    dep: string
): Promise<void> => {
    Spinner.start(`installing ${chalk.underline(dep)}`);
    return new Promise((resolve, reject) => {
        exec(`npm install --save ${dep}`, { cwd: projectDir }).on(
            "close",
            (code) => {
                if (code === 0) {
                    Spinner.succeed();
                    resolve();
                    return;
                }

                Spinner.fail();
                reject();
            }
        );
    });
};

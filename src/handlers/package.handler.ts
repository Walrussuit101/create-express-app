import { execSync } from "child_process";

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
        main: {},
        scripts: {},
        dependencies: {}
    };

    switch (template) {
        case "static":
            const templateSpec = templateSpecDictionary[template];
            packageObj.main = templateSpec.main;
            packageObj.scripts = templateSpec.scripts;
            break;
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
export const installDeps = (projectDir: string, template: string): void => {
    switch (template) {
        case "static":
            templateSpecDictionary[template].dependencies.forEach((dep) => {
                // green bar
                console.log(
                    `${"\x1b[32m"}====================================================`
                );

                // reset, underline dep
                console.log(`${"\x1b[0m"}installing: ${"\x1b[4m"}${dep}`);

                // reset and log out stdout of execSync()
                // execSync returns a buffer so need to convert to utf-8 formatted string
                console.log("\x1b[0m");
                console.log(
                    execSync(`npm install --save ${dep}`, {
                        cwd: projectDir
                    }).toString("utf-8")
                );
            });
            break;
    }
};

import { readFileSync, writeJSONSync, copySync } from "fs-extra";
import path from "path";

import { Logger } from "./models";

const logger = new Logger();
const buildDirPath = path.join(__dirname, "..", "build");

const main = () => {
    // update package.json in build directory
    const packagePath = path.join(buildDirPath, "package.json");
    const packageStr = readFileSync(packagePath).toString("utf8");
    const packageObj = JSON.parse(packageStr);

    delete packageObj.scripts;
    delete packageObj.devDependencies;
    delete packageObj["lint-staged"];
    packageObj.main = "src/index.js";
    packageObj.bin = "src/index.js";

    writeJSONSync(packagePath, packageObj, { spaces: 4 });
    logger.info("Build package.json updated");

    // copy README and templates
    const readmePath = path.join(__dirname, "..", "README.md");
    const templatesPath = path.join(__dirname, "..", "templates");
    copySync(readmePath, path.join(buildDirPath, "README.md"));
    copySync(templatesPath, path.join(buildDirPath, "templates"), {
        recursive: true
    });
    logger.info("README file and templates directory copied");
};

try {
    main();
} catch (e) {
    console.error(e);
    process.exit(1);
}
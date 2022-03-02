import { arguments, helpArguments } from "../interfaces";
import CustomError from "../models";
import path from "path";
import { readdirSync } from "fs-extra";

/**
 * Get and clean arguments from user
 *
 * @param projectName Given project name
 * @param template Given template
 * @param options Given options
 * @returns arguments
 * @throws CustomError
 */
export const getArguments = (
    projectName: string,
    template: string,
    options: { [option: string]: boolean }
): arguments => {
    const lowerName = projectName.toLowerCase();
    const lowerTemplate = template.toLowerCase();

    // only allow project name to have letters, numbers, -, and _
    const regex = new RegExp("^[A-Za-z0-9_-]*$");

    if (!regex.test(lowerName)) {
        throw new CustomError(
            "E002",
            `Invalid project name provided: "${lowerName}"`
        );
    }

    // only allow valid templates
    const validTemplates = getValidTemplates();

    if (!validTemplates.includes(lowerTemplate)) {
        throw new CustomError(
            "E004",
            `Invalid template provided: "${lowerTemplate}"`
        );
    }

    // if --git is given set createGit
    const createGit = options["git"] ? true : false;

    // return cleaned parsed args
    return {
        projectName: lowerName,
        template: lowerTemplate,
        createGit
    };
};

/**
 * Get valid templates by reading the directory names
 * of the "templates" directory
 *
 * @returns string[]
 */
export const getValidTemplates = (): string[] => {
    const templateDir = path.join(__dirname, "..", "..", "templates");

    // only get directory names from the './templates' dir, filtering out any possible files
    return readdirSync(templateDir, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .map((dir) => dir.name);
};

/**
 * Get and clean help script arguments from user.
 *
 * Currently only 1 arg 'lookUp' which can be undefined,
 * so caller must check for that
 *
 * @returns helpArguments
 * @throws CustomError
 */
export const getHelpArguments = (): helpArguments => {
    let args = process.argv.splice(2).map((arg) => {
        return arg.toLowerCase();
    });

    // if we have args, validate / clean accepted ones
    if (args.length) {
        // make sure lookUp is just a string
        let lookUpRegex = new RegExp("^[A-za-z]*$");
        const lookUp = args[0];

        if (!lookUpRegex.test(lookUp)) {
            throw new CustomError(
                "E006",
                `"${lookUp}" is an invalid lookup value`
            );
        }

        return {
            lookUp
        };
    }

    // otherwise return undefined
    return {
        lookUp: undefined
    };
};

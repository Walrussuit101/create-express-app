import { arguments, helpArguments } from '../interfaces';
import CustomError from '../models';
import path from 'path';
import { readdirSync } from 'fs-extra';

/**
 * Get and clean arguments from user
 *
 * @returns arguments
 * @throws CustomError
 */
export const getArguments = (): arguments => {
	let args = process.argv.splice(2).map(arg => {
		return arg.toLowerCase();
	});

	// check all args are present
	if (args.length !== 2) {
		throw new CustomError("E001", "Required arguments not provided");
	}

	// only allow project name to have letters, numbers, -, and _
	const regex = new RegExp("^[A-Za-z0-9_-]*$");
	const projectName = args[0];

	if (!regex.test(projectName)) { 
		throw new CustomError("E002", `Invalid project name provided: "${projectName}"`);
	}

	// only allow valid templates
	const template = args[1];
	const validTemplates = getValidTemplates();

	if (!validTemplates.includes(template)) {
		throw new CustomError("E004", `Invalid template provided: "${template}"`);	
	}

	// return cleaned parsed args
	return {
		projectName,
		template
	}
}

/**
 * Get valid templates by reading the directory names
 * of the "templates" directory
 * 
 * @returns string[]
 */
export const getValidTemplates = (): string[] => {
	const templateDir = path.join(__dirname, "..", "..", "templates");

	// only get directory names from the './templates' dir, filtering out any possible files
	return readdirSync(templateDir, {withFileTypes: true}).filter(dir => dir.isDirectory()).map(dir => dir.name);
}

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
	let args = process.argv.splice(2).map(arg => {
		return arg.toLowerCase();
	});

	// if we have args, validate / clean accepted ones
	if (args.length) {
		// make sure lookUp is just a string
		let lookUpRegex = new RegExp("^[A-za-z]*$");
		const lookUp = args[0];

		if(!lookUpRegex.test(lookUp)){
			throw new CustomError("E006", `"${lookUp}" is an invalid lookup option`);
		}

		return {
			lookUp
		}
	}
	
	// otherwise return undefined
	return {
		lookUp: undefined
	}
}
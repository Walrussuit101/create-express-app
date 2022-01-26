import { arguments } from '../interfaces';
import CustomError from '../models';

const VALID_TEMPLATES = ['static'];

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

	if (!VALID_TEMPLATES.includes(template)) {
		throw new CustomError("E004", `Invalid template provided: "${template}"`);	
	}

	// return cleaned parsed args
	return {
		projectName,
		template
	}
}
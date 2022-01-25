import { arguments } from '../interfaces';
import CustomError from '../models';

/**
 * Get and clean arguments from user
 *
 * @returns arguments
 * @throws CustomError
 */
export const getArguments = (): arguments => {
	let args = process.argv.splice(2);

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

	// return cleaned parsed args
	return {
		projectName: args[0].toLowerCase(),
		template: args[1].toLowerCase()
	}
}

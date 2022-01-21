import { arguments } from '../interfaces';

/**
 * Get and clean arguments from user
 *
 * @returns arguments
 * @throws E001, E002
 */
export const getArguments = (): arguments => {
	let args = process.argv.splice(2);

	// check all args are present
	if (args.length !== 2) {
		throw new Error("E001 - Required arguments not provided");
	}

	// only allow project name to have letters, numbers, -, and _
	const regex = new RegExp("^[A-Za-z0-9_-]*$");
	const projectName = args[0];

	if (!regex.test(projectName)) { 
		throw new Error("E002 - Invalid project name provided: \""+projectName+"\"");
	}

	// returned cleaned parsed args
	return {
		projectName: args[0].toLowerCase(),
		template: args[1].toLowerCase()
	}
}

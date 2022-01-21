import { arguments } from '../interfaces';

/**
 * Get and clean arguments from user
 *
 * @returns arguments
 * @throws E001 when arguments not provided
 */
export const getArguments = (): arguments => {
	let args = process.argv.splice(2);

	// check all args are present
	if (args.length !== 3) {
		throw new Error("E001 - Required arguments not provided");
	}

	// only allow project name to have letters, numbers, -, and _
	const regex = new RegExp("^[A-Za-z0-9_-]*$");
	if (!regex.test(args[1])) { 
		throw new Error("E002 - Invalid project name provided: \""+args[1]+"\"");
	}

	return {
		projectDir: args[0].toLowerCase(),
		projectName: args[1].toLowerCase(),
		template: args[2].toLowerCase()
	}
}

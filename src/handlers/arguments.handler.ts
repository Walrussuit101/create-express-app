import { arguments } from '../interfaces';

/**
 * Get and clean arguments from user
 *
 * @returns arguments
 * @throws E001 when arguments not provided
 */
export const getArguments = (): arguments => {
	let args = process.argv.splice(2);

	if (args.length !== 3) {
		throw new Error("E001 - Required arguments not provided");
	}

	return {
		projectDir: args[0].toLowerCase(),
		projectName: args[1].toLowerCase(),
		template: args[2].toLowerCase()
	}
}

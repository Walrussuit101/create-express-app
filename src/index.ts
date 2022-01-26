import {
	argumentsHandler, 
	directoryHandler 
} from './handlers';
import CustomError from './models';

const main = () => {
	let args = argumentsHandler.getArguments(); 
	console.log(args);

	// get project directory and create it
	const projectDir = directoryHandler.getProjectDirectory(args.projectName);
	directoryHandler.createProjectDirectory(projectDir);
}

try {
	main();
} catch(e: unknown) {
	(e instanceof CustomError) ? e.log() : console.error(e);
	process.exit(1);
}

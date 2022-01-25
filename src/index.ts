import {
	argumentsHandler, 
	directoryHandler 
} from './handlers';
import CustomError from './models';

const main = () => {
	let args = argumentsHandler.getArguments(); 
	console.log(args);

	const projectDir = directoryHandler.getProjectDirectory(args.projectName);
	console.log(projectDir);
}

try {
	main();
} catch(e: unknown) {
	(e instanceof CustomError) ? e.log() : console.error(e);
	process.exit(1);
}

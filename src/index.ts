import {
	argumentsHandler, 
	directoryHandler 
} from './handlers';
import CustomError from './models';

const main = () => {
	let args = argumentsHandler.getArguments(); 
	console.log(args);

	// get project directory
	const projectDir = directoryHandler.getProjectDirectory(args.projectName);

	// if ran by dev script, delete project directory.
	// dev uses nodemon, which would throw an error b/c
	// project directory was made in the previous execution.
	if (process.env.npm_lifecycle_event === "dev") {
		directoryHandler.deleteProjectDirectory(projectDir);
	}

	// create project directory and copy template
	directoryHandler.createProjectDirectory(projectDir);
	directoryHandler.copyTemplate(projectDir, args.template);
	directoryHandler.initGitRepo(projectDir);
}

try {
	main();
} catch(e: unknown) {
	(e instanceof CustomError) ? e.log() : console.error(e);
	process.exit(1);
}

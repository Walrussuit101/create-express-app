import {
	argumentsHandler, 
	directoryHandler,
	packageHandler
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

	// build package file, output to project dir, install deps
	const packageObj = packageHandler.buildPackageObj(args.projectName, args.template);
	directoryHandler.copyPackageObj(projectDir, packageObj);
	packageHandler.installDeps(projectDir, args.template);
}

try {
	main();
} catch(e: unknown) {
	(e instanceof CustomError) ? e.log() : console.error(e);
	process.exit(1);
}

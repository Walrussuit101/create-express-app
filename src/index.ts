import { errorHandler, argumentsHandler } from './handlers';

const main = () => {
	let args = argumentsHandler.getArguments(); 
	console.log(args);
}

try {
	main();
} catch(e: unknown) {
	if (e instanceof Error){
		console.error("\x1b[31m", e.message); // log message in red
		console.error("\x1b[0m", errorHandler.getErrorString(e.message)); // reset color for error string
	}
	process.exit(1);
}

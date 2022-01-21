import { arguments } from './interfaces';

const getArguments = (): arguments => {
	let args = process.argv.splice(2);

	
	if (args.length !== 3) {
		throw new Error("E001 - Required arguments not provided");
	}

	return {
		projectDir: args[0],
		projectName: args[1],
		template: args[2]
	}
}

const main = () => {
	let args = getArguments(); 
	console.log(args);
}

try {
	main();
} catch(e: unknown) {
	if (e instanceof Error){
		e.stack = undefined;
		console.error(e);
	}
	process.exit(1);
}

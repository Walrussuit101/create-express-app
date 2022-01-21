export const getErrorString = (errorMessage: string): string => {
	const errorCode = errorMessage.substring(0, 4);

	switch (errorCode) {
		case "E001":
			return(
				"\nPlease provide the minimum arguments:\n\n" +
				"\t1st: Project Directory\n" +
				"\t2nd: Project Name\n" +
				"\t3rd: Template\n\n"+
				"ex: npm start directory/for/project my-project skeleton\n"
			);
		default:
			return '';
	}
}

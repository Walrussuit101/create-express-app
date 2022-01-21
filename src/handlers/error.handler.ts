/**
 * Get the error's output string based on the error code.
 * If error code not recognized, returns emptpy string.
 *
 * @param errorMessage Error message string to parse
 * @returns string
 */
export const getErrorString = (errorMessage: string): string => {
	const errorCode = errorMessage.substring(0, 4);

	switch (errorCode) {
		case "E001":
			return(
				"\nPlease provide the minimum arguments:\n\n" +
				"\t1st: Project Directory\n" +
				"\t2nd: Project Name\n" +
				"\t3rd: Template\n\n" +
				"ex: npm start directory/for/project my-project skeleton\n"
			);
		case "E002":
			return(
				"\nPlease provide a project name containing only the follow characters:\n\n" +
				"\t a-z, A-Z, 0-9, -, and _\n\n" +
				"ex: npm start directory/for/project my-project skeleton\n"
			);
		default:
			return '';
	}
}

import chalk from "chalk";

import { CustomError } from "./";

class Logger {
    info(message: string) {
        console.log(`[${chalk.green("INFO")}] ${message}`);
    }

    error(customError: CustomError) {
        console.error(
            `[${chalk.red(customError.code)}] ${chalk.red(
                customError.message
            )}\n${chalk.red(customError.detail)}`
        );
    }
}

export default Logger;

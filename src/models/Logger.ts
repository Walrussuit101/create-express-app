import chalk from "chalk";

class Logger {
    info(message: string) {
        console.log(`[${chalk.green("INFO")}] ${message}`);
    }

    error(code: string, message: string, detail: string) {
        console.error(
            `[${chalk.red(code)}] ${chalk.red(message)}\n${chalk.red(detail)}`
        );
    }
}

export default Logger;

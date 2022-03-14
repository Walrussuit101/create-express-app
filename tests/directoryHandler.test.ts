import { directoryHandler } from "../src/handlers";
import path from "path";

describe("getProjectDirectory()", () => {
    it("returns the cwd when given .", () => {
        const projectName = ".";
        const projectDir = directoryHandler.getProjectDirectory(projectName);
        const expectedDir = process.cwd();

        expect(projectDir).toStrictEqual(expectedDir);
    });

    it("returns a new directory in the cwd when given anything other than .", () => {
        const projectName = "test-dir";
        const projectDir = directoryHandler.getProjectDirectory(projectName);
        const expectedDir = path.join(process.cwd(), projectName);

        expect(projectDir).toEqual(expectedDir);
    });
});

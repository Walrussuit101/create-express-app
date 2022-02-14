import { directoryHandler } from "../src/handlers";
import path from "path";

describe("getProjectDirectory()", () => {
    it("returns a neighboring directory path", () => {
        const projectName = "test-dir";
        const projectDir = directoryHandler.getProjectDirectory(projectName);
        const expectedDir = path.join(__dirname, "..", "..", projectName);

        expect(projectDir).toEqual(expectedDir);
    });
});

import { directoryHandler } from "../src/handlers";
import path from "path";

describe("getProjectDirectory()", () => {
    it("should return a neighbording directory path", () => {
        const projectName = "test-dir";
        const projectDir = directoryHandler.getProjectDirectory(projectName);
        const expectedDir = path.join(__dirname, "..", "..", projectName);

        expect(projectDir).toEqual(expectedDir);
    });
});

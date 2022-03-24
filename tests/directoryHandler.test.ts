import { directoryHandler } from "../src/handlers";
import fs from "fs-extra";
import path from "path";

import { CustomError } from "../src/models";

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

describe("createProjectDirectory()", () => {
    let mkdirSyncMock: jest.SpyInstance;

    // setup mocks
    beforeAll(() => {
        mkdirSyncMock = jest.spyOn(fs, "mkdirSync").mockImplementation();
    });

    // restore mock implementations
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // clear mock usage data after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("creates a directory with the given project directory", () => {
        const testProjectDir = path.join(process.cwd(), "fake-dir");

        directoryHandler.createProjectDirectory(testProjectDir);

        expect(mkdirSyncMock).toHaveBeenCalledWith(testProjectDir);
    });

    it("throws E002 when directory already exists", () => {
        const duplicateDir = path.join(__dirname);

        try {
            directoryHandler.createProjectDirectory(duplicateDir);
        } catch (e) {
            expect(e).toBeInstanceOf(CustomError);

            // use as below since we test for CustomError instance above
            expect((e as CustomError).code).toStrictEqual("E002");
        }
    });
});

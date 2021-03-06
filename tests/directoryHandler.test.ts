import { directoryHandler } from "../src/handlers";
import fs from "fs-extra";
import child from "child_process";
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

describe("copyTemplate()", () => {
    let copySyncMock: jest.SpyInstance;
    let renameSyncMock: jest.SpyInstance;

    // setup mocks
    beforeAll(() => {
        copySyncMock = jest.spyOn(fs, "copySync").mockImplementation();
        renameSyncMock = jest.spyOn(fs, "renameSync").mockImplementation();
    });

    // restore mock implementations
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // clear mock usage data after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    const testProjectDir = path.join(process.cwd(), "test-dir");
    const testTemplate = "static";

    it("copies the given template to the given directory", () => {
        directoryHandler.copyTemplate(testProjectDir, testTemplate);

        expect(copySyncMock).toHaveBeenCalledTimes(1);
        expect(copySyncMock.mock.calls[0][0]).toContain(testTemplate);
        expect(copySyncMock.mock.calls[0][1]).toStrictEqual(testProjectDir);
    });

    it("adds . prefix to the gitignore file", () => {
        directoryHandler.copyTemplate(testProjectDir, testTemplate);

        expect(renameSyncMock).toHaveBeenCalledWith(
            path.join(testProjectDir, "gitignore"),
            path.join(testProjectDir, ".gitignore")
        );
    });
});

describe("deleteProjectDirectory()", () => {
    let removeSyncMock: jest.SpyInstance;

    // setup mocks
    beforeAll(() => {
        removeSyncMock = jest.spyOn(fs, "removeSync").mockImplementation();
    });

    // restore mock implementations
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // clear mock usage data after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("deletes given directory", () => {
        const testDirectory = path.join(process.cwd(), "test-dir");

        directoryHandler.deleteProjectDirectory(testDirectory);

        expect(removeSyncMock).toHaveBeenCalledWith(testDirectory);
    });
});

describe("copyPackageObj()", () => {
    let outputJSONSyncMock: jest.SpyInstance;

    // setup mocks
    beforeAll(() => {
        outputJSONSyncMock = jest
            .spyOn(fs, "outputJSONSync")
            .mockImplementation();
    });

    // restore mock implementations
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // clear mock usage data after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("outputs JSON file to given directory with spaces set to 2", () => {
        const testProjectDir = path.join(process.cwd(), "test-dir");
        const testOutputDir = path.join(testProjectDir, "package.json");
        const testPackageObj = {
            test: 123
        };

        directoryHandler.copyPackageObj(testProjectDir, testPackageObj);

        expect(outputJSONSyncMock).toHaveBeenCalledWith(
            testOutputDir,
            testPackageObj,
            { spaces: 2 }
        );
    });
});

describe("initGitRepo()", () => {
    let execSyncMock: jest.SpyInstance;

    // setup mocks
    beforeAll(() => {
        execSyncMock = jest.spyOn(child, "execSync").mockImplementation();
    });

    // restore mock implementations
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // clear mock usage data after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("init repo, adds files, and commits with message", () => {
        const testProjectDir = path.join(process.cwd(), "test-dir");

        directoryHandler.initGitRepo(testProjectDir);

        // check init, add, and commit
        expect(execSyncMock).toHaveBeenCalledTimes(3);
        expect(execSyncMock.mock.calls[0][0]).toContain("init");
        expect(execSyncMock.mock.calls[1][0]).toContain("add .");
        expect(execSyncMock.mock.calls[2][0]).toContain(
            `commit -m "Initial Commit"`
        );

        // check each calls argument has the project directory
        execSyncMock.mock.calls.forEach((call) => {
            expect(call[0]).toContain(testProjectDir);
        });
    });
});

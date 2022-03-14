import { packageHandler } from "../src/handlers";
import { Logger } from "../src/models";

import child_process, { ChildProcess } from "child_process";
import ora, { Ora } from "ora";

describe("buildPackageObj()", () => {
    const testProjectName = "test-project";
    const testProjectTemplate = "static";

    const packageObj = packageHandler.buildPackageObj(
        testProjectName,
        testProjectTemplate
    );

    it("sets the name field to given project name", () => {
        expect(packageObj.name).toStrictEqual(testProjectName);
    });

    it("sets the version to 1.0.0", () => {
        expect(packageObj.version).toStrictEqual("1.0.0");
    });

    it("defines the main field with a non-empty string", () => {
        expect(packageObj.main).not.toEqual("");
    });

    it("defines the scripts field with a non-empty object", () => {
        let scriptKeys = Object.keys(packageObj.scripts);
        expect(scriptKeys.length).toBeGreaterThanOrEqual(1);
    });

    // this really should never happen as an error will be thrown by
    // argumentsHandler, but may as well check this behavior.
    it("returns empty main/scripts field on invalid template", () => {
        const packageObj = packageHandler.buildPackageObj(
            "test-project",
            "bad-template"
        );
        let scriptKeys = Object.keys(packageObj.scripts);

        expect(packageObj.main).toStrictEqual("");
        expect(scriptKeys.length).toStrictEqual(0);
    });
});

describe("installDeps()", () => {
    let installDepMock: jest.SpyInstance;

    // setup mocks for tests
    beforeAll(() => {
        // don't want to actually install a depdency so use an empty implementation
        installDepMock = jest
            .spyOn(packageHandler, "installDep")
            .mockImplementation();
    });

    // after the tests are done for this suite,
    // reset any mocked functions back to original implementation
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // after each test clear any mock usage data
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("calls installDep() more than once with the project directory and a dependency", async () => {
        const testProjectDir = "./";
        await packageHandler.installDeps(testProjectDir, "static");

        expect(installDepMock.mock.calls.length).toBeGreaterThan(1);

        // for each installDep() call, expect the args to be the project directory and a dependency
        installDepMock.mock.calls.forEach((call) => {
            expect(call.length).toEqual(2);
            expect(call[0]).toStrictEqual(testProjectDir);
            expect(call[1]).toEqual(expect.any(String));
        });
    });

    // this really should never happen as an error will be thrown by
    // argumentsHandler, but may as well check this behavior.
    it("doesn't call installDep() when given an invalid template", () => {
        packageHandler.installDeps("./", "bad-template");

        expect(installDepMock).not.toHaveBeenCalled();
    });
});

describe("installDep()", () => {
    let oraStartMock: jest.SpyInstance;
    let execMock: jest.SpyInstance;
    let execProc = new ChildProcess();

    const testProjectDir = "./";
    const testDependency = "test-package";

    // setup mock for tests
    beforeAll(() => {
        oraStartMock = jest.spyOn(ora(), "start").mockImplementation();
        jest.spyOn(ora(), "succeed").mockImplementation();
        jest.spyOn(ora(), "fail").mockImplementation();

        // don't install any depdencies during these tests
        execMock = jest.spyOn(child_process, "exec").mockReturnValue(execProc);
    });

    // after the tests are done for this suite,
    // reset any mocked functions back to original implementation
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // after each test clear any mock usage data
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("starts a spinner when installing a dep", () => {
        packageHandler.installDep(testProjectDir, testDependency).then(() => {
            execProc.emit("close");
        });

        expect(oraStartMock).toHaveBeenCalled();
    });

    it("calls exec() with dependency and cwd option set", () => {
        packageHandler.installDep(testProjectDir, testDependency).then(() => {
            execProc.emit("close");
        });

        expect(execMock).toHaveBeenCalledTimes(1);
        expect(execMock).toHaveBeenCalledWith(expect.any(String), {
            cwd: testProjectDir
        });
    });
});

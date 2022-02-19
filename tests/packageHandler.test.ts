import { packageHandler } from "../src/handlers";

describe("buildPackageObj()", () => {
    const testProjectName = "test-project";
    const testProjectTemplate = "static";

    const packageObj = packageHandler.buildPackageObj(
        testProjectName,
        testProjectTemplate
    );

    it("sets the name field correctly", () => {
        expect(packageObj.name).toStrictEqual(testProjectName);
    });

    it("sets the version to 1.0.0", () => {
        expect(packageObj.version).toStrictEqual("1.0.0");
    });

    it("defines the main field with a non-empty string", () => {
        expect(packageObj.main).not.toEqual("");
    });

    it("defines the script field with a non-empty object", () => {
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
    // mock installDep() to just return right away.
    // we don't want packages to be actually installed when testing.
    const installDepMock = jest.spyOn(packageHandler, "installDep");
    installDepMock.mockImplementation(() => {
        return;
    });

    // after each test clear any mock usage data
    afterEach(() => {
        installDepMock.mockClear();
    });

    it("calls installDep() more than once with the project directory and a dependency", () => {
        const testProjectDir = "./";
        packageHandler.installDeps(testProjectDir, "static");

        expect(installDepMock.mock.calls.length).toBeGreaterThan(1);

        // for each call, expect the args to be the project directory and a dependency
        installDepMock.mock.calls.forEach((call) => {
            expect(call.length).toEqual(2);
            expect(call[0]).toStrictEqual(testProjectDir);
            expect(call[1]).toEqual(expect.any(String));
        });
    });

    it("doesn't call installDep() when given an invalid template", () => {
        packageHandler.installDeps("./", "bad-template");

        expect(installDepMock).not.toHaveBeenCalled();
    });
});

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

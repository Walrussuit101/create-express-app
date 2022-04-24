import { argumentsHandler } from "../src/handlers";
import { CustomError } from "../src/models";

describe("getArguments()", () => {
    it("throws E001 when invalid project name given", () => {
        const badProjectNames = ["@testing", "br^", "[|';l]"];

        badProjectNames.forEach((badName) => {
            try {
                argumentsHandler.getArguments(badName, "static", {
                    git: true
                });
            } catch (e) {
                expect(e).toBeInstanceOf(CustomError);
                expect((e as CustomError).code).toStrictEqual("E001");
            }
        });
    });

    it("throws E003 when invalid template given", () => {
        const invalidTemplate = "bad-template";

        try {
            argumentsHandler.getArguments("my-project", invalidTemplate, {});
        } catch (e) {
            expect(e).toBeInstanceOf(CustomError);
            expect((e as CustomError).code).toStrictEqual("E003");
        }
    });

    it("returns the git option as false when not provided", () => {
        const args = argumentsHandler.getArguments("my-project", "static", {});

        expect(args.createGit).toStrictEqual(false);
    });

    it("returns an arguments object when all valid args given", () => {
        const projectName = "my-project";
        const template = "static";
        const options = {
            git: true
        };

        const args = argumentsHandler.getArguments(
            projectName,
            template,
            options
        );

        expect(args).toStrictEqual({
            projectName: projectName,
            template: template,
            createGit: true
        });
    });
});

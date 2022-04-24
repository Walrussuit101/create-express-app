import fs from "fs-extra";

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

describe("getValidTemplates", () => {
    let readDirSyncMock: jest.SpyInstance;

    // setup mock
    beforeAll(() => {
        readDirSyncMock = jest.spyOn(fs, "readdirSync").mockImplementation();
    });

    // restore mock implementations
    afterAll(() => {
        jest.restoreAllMocks();
    });

    // clear mock usage data after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("filters out non directory items", () => {
        readDirSyncMock.mockReturnValue([
            {
                name: "is-file",
                isDirectory: () => {
                    return false;
                }
            },
            {
                name: "is-directory",
                isDirectory: () => {
                    return true;
                }
            }
        ]);

        const validTemplates = argumentsHandler.getValidTemplates();

        expect(validTemplates.length).toStrictEqual(1);
    });

    it("only returns directory names", () => {
        readDirSyncMock.mockReturnValue([
            {
                name: "is-directory",
                isDirectory: () => {
                    return true;
                }
            }
        ]);

        const validTemplates = argumentsHandler.getValidTemplates();

        expect(validTemplates[0]).toStrictEqual("is-directory");
    });
});

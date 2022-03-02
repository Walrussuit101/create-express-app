import CustomError from "../src/models";

describe("log()", () => {
    let consoleErrorMock: jest.SpyInstance;

    const testCode = "E001";
    const testMessage = "Test message";
    const TestingError = new CustomError(testCode, testMessage);

    // setup mock
    beforeAll(() => {
        consoleErrorMock = jest
            .spyOn(global.console, "error")
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

    it("calls console.error twice", () => {
        TestingError.log();
        expect(consoleErrorMock).toHaveBeenCalledTimes(2);
    });

    it("calls console.error() 1st with red color, code, and message", () => {
        TestingError.log();
        const firstErrorCallArg: string = consoleErrorMock.mock.calls[0][0];

        expect(firstErrorCallArg).toContain("\x1b[31m");
        expect(firstErrorCallArg).toContain(testCode);
        expect(firstErrorCallArg).toContain(testMessage);
    });

    it("calls console.error() 2nd with reset color and detail", () => {
        TestingError.log();
        const secondErrorCallArg: string = consoleErrorMock.mock.calls[1][0];

        expect(secondErrorCallArg).toContain("\x1b[0m");
        expect(secondErrorCallArg).toContain(
            "Please provide a project name containing only the following characters:"
        );
    });
});

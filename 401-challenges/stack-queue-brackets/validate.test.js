const validateBrackets = require('./validate');

describe("BRACKETS VALIDATION TEST", () => {
    it("Validates all kind of brackets", () => {
        expect(validateBrackets("[]")).toEqual(true);
        expect(validateBrackets("()")).toEqual(true);
        expect(validateBrackets("{}")).toEqual(true);
    });
    it("Validates brackets combined togather, No matter how it's complex", () => {
        expect(validateBrackets("({[]})(){([])}")).toEqual(true);
    })
    it("Validates brackets with combined with a normal strings", () => {
        expect(validateBrackets("(I)[Love]{ASAC}"));
    })
    it("Invalidates invalid brackets closings", () => {
        expect(validateBrackets("(}")).toEqual(false);
        expect(validateBrackets("(){]")).toEqual(false);
    })
    it("Invalidates missing brackets openings or closings", () => {
        expect(validateBrackets("[")).toEqual(false);
        expect(validateBrackets(")")).toEqual(false);
        expect(validateBrackets("{")).toEqual(false);
    })
})

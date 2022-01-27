var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator application", () => {
    describe("Addition", () => {
        it("Adds two numbers together successfully", () => {
            var pass = calculator.add(5, 2);
            expect(pass, `add(5, 2) expected result ${pass}`).to.equal(7);
        }),
        it("Adds two numbers together unsuccessfully", () => {
            var fail = calculator.add(5, 2);
            expect(fail, 'add(5, 2) expected result 8 FAIL').to.equal(8);
        })
    }),
    describe("Subtraction", () => {
        it("Subtracts two numbers together successfully", () => {
            var pass = calculator.sub(5, 2);
            expect(pass, `sub(5, 2) expected result ${pass}`).to.equal(3);
        }),
        it("Subtracts two numbers together unsuccessfully", () => {
            var fail = calculator.sub(5, 2);
            expect(fail, 'sub(5, 2) expected result 5 FAIL').to.equal(5);
        })
    }),
    describe("Multiplication", () => {
        it("Multiplies two numbers together successfully", () => {
            var pass = calculator.mul(5, 2);
            expect(pass, `mul(5, 2) expected result ${pass}`).to.equal(10);
        }),
        it("Multiplies two numbers together unsuccessfully", () => {
            var fail = calculator.mul(5, 2);
            expect(fail, 'mul(5, 2) expected result 12 FAIL').to.equal(12);
        })
    }),
    describe("Division", () => {
        it("Divides two numbers together successfully", () => {
            var pass = calculator.div(10, 2);
            expect(pass, `div(10, 2) expected result ${pass}`).to.equal(5);
        }),
        it("Divides two numbers together unsuccessfully", () => {
            var fail = calculator.div(10, 2);
            expect(fail, 'div(10, 2) expected result 2 FAIL').to.equal(2);
        })
    })
})
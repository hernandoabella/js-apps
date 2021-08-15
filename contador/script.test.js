const rewire = require("rewire")
const script = rewire("./script")
const restar = script.__get__("restar")
// @ponicode
describe("restar", () => {
    test("0", () => {
        let callFunction = () => {
            restar()
        }
    
        expect(callFunction).not.toThrow()
    })
})

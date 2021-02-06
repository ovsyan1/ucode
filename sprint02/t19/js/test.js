describe("checkBrackets", function() {
    it("if_Undefined",function() {
        assert.equal(checkBrackets(undefined), '-1')
    })
    it("if_Nan",function() {
        assert.equal(checkBrackets(NaN), '-1')
    })
    it("if_string",function() {
        assert.equal(checkBrackets('abc'), '-1')
    })
    it("if_number",function() {
        assert.equal(checkBrackets(1), '-1')
    })
    it("if_null",function() {
        assert.equal(checkBrackets(null), '-1')
    })
    it("()", function() {
        assert.equal(checkBrackets('()'), '1');
    });
    it("() )(", function() {
        assert.equal(checkBrackets('() )('), '1');
    });
    it("()()()()()()()", function() {
        assert.equal(checkBrackets('()()()()()()()'), '1');
    });
    it("()()buyb(buyff))", function() {
        assert.equal(checkBrackets('()()()()()()()'), '0');
    });
    it("()()()()()()()", function() {
        assert.equal(checkBrackets('()()()()()()()'), '0');
    });
    it("([", function() {
        assert.equal(checkBrackets('()()()()()()()'), '0');
    });
    it("((((((((((1))))))))))", function() {
        assert.equal(checkBrackets('((((((((((1))))))))))'), '0');
    });
    it("( ( ( ( ( ( (", function() {
        assert.equal(checkBrackets('( ( ( ( ( ( ('), '7');
    });
    it("(1) (2) (3) (4)", function() {
        assert.equal(checkBrackets('(1) (2) (3) (4)'), '0');
    });
    it(")1( )2(", function() {
        assert.equal(checkBrackets(')1( )2('), '2');
    });
});
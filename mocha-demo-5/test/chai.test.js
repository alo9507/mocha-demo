var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {

	it("should print the last name first", function() {

		var results = tools.printName({ first: "Alex", last: "Banks"});

		expect(results).to.equal("Banks, Alex");

	});

});

/*
http://www.chaijs.com/
- chain together natural language assertions

SHOULD

should.exist
should.not.exist
should.equal
should.not.equal
should.Throw
should.not.Throw

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

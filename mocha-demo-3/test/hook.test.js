describe("test the order of Mocha hooks", function(){

//test suite level
 before( function(){ console.log("before"); });
 after( function(){ console.log("after"); });

//individual test level
 beforeEach( function(){ console.log("beforeEach"); });
 afterEach( function(){ console.log("afterEach"); });

 it("test 1", function(){ console.log("1"); });
 it("est 2", function(){ console.log("2"); });

});

//Mocha: testing framework

describe("F2 Parent Test Suite", function() {

  describe("F2 Child Test Suite", function() {
    //test cases
    it('should list ALL blobs on /blobs GET');
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
  });

  describe("F2 Child Test Suite", function() {
    //test cases
    it('should list ALL blobs on /blobs GET');
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
  });
});

it("should be lonely");

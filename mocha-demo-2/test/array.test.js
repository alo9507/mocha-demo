var assert = require('assert');
var maybeFirst = require('../lib/maybeFirst');
var emptyArray = require('../lib/emptyArray');

describe('maybeFirst', function() {
  it('returns the first element of an array', function() {
    var result = maybeFirst([1, 2, 3]);

    assert.equal(result, 1, 'maybeFirst([1, 2, 3]) is 1');
  });

  it('returns undefined if array is empty', function() {
   var result = emptyArray([]);

   assert.strictEqual(result, undefined, 'emptyArray([]) is undefined');
 });

});

const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  it('should check is a number is fizz buzz or not ', function(){
    const normalClasses = [
    {num:15, expected:'fizz-buzz'},
    {num:5, expected:'buzz'},
    {num:3, expected:'fizz'},
    {num:4, expected: 4}];

    normalClasses.forEach(function(input){
      const answer = fizzBuzzer(input.num); 
      answer.should.be.equal(input.expected);
    });
  });

  //test for bad inputs

  it('should raiser error if inputs is not a numbes', function(){
    const badInputs= ['a', null, undefined];
    badInputs.forEach(function(elt){
      (function() {fizzBuzzer(elt)}).should.throw(Error);
    }); 
  });

})
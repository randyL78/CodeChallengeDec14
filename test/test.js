const expect = require('chai').expect;

describe('whichCentury', () => {
    const whichCentury = require('../challenge.js').whichCentury;
    it('Should return a number', () => {
        expect(whichCentury(312)).to.be.a('number');
    });
    it('should return 1 when a number between 1 and 100 is entered', () => {
        expect(whichCentury(5)).to.equal(1);        
        expect(whichCentury(100)).to.equal(1);        
    });
    it('should return 2 when a number between 201 and 300 is entered', () => {
        expect(whichCentury(101)).to.equal(2);        
        expect(whichCentury(200)).to.equal(2);        
    });
    it('should return 19 when a number between 1801 and 1900 is entered', () => {
        expect(whichCentury(1865)).to.equal(19);        
        expect(whichCentury(1900)).to.equal(19);        
    });
    it('should return 21 when a number between 2001 and 2100 is entered', () => {
        expect(whichCentury(2017)).to.equal(21);               
    });
});


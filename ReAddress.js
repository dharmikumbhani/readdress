class Readdress {

    address = '';
    constructor(address){
        this.address = address;
        this.addresslength = address.length;      
    }
    getAddress(){
        return this.address;
    }
    getAddressLength(){
        return this.address.length;
    }
    mapAddressToArray() {
        var array = [];
        for (var i = 0; i < this.address.length; i++) {
            array.push(this.address.charAt(i));
        }
        return array;
    }
    convertToUnicodeString() {
        let result = '';
        let unicode = '';
        for (let index = 0; index < this.address.length; index++) {
            unicode = unicode + this.address.charCodeAt(index);
            // result = result + this.address.charCodeAt(index).toString(16);
        }
        return unicode;
    }
    convertToUnicodeArray() {
        const array = this.mapAddressToArray();
        let unicodeArray = [];
        for (let index = 0; index < array.length; index++) {
            unicodeArray.push(array[index].charCodeAt(0));
        }
        return unicodeArray
    }
    
    //  Cleaning this will cause only one problem any character that has unicode smaller than 48 will become negative.
    reducedRangeUnicodeArray(){
        // 0 - 48
        // z - 122 

        // 48 to 122
        // 0 to 74
        const array = this.convertToUnicodeArray();
        let reducedRangeUnicodeArray = [];
        for (let index = 0; index < array.length; index++) {
            reducedRangeUnicodeArray.push(array[index]-48);
        }
        return reducedRangeUnicodeArray;
    }
}


module.exports = Readdress;



/**
 * Logic
 */
//  address = 'jEbcKcINcfKgchjJ2GeklnG2Gbbe7b'
//  address = 'aa12BB'
// ==================
//  1. Convert characters to Hex
//  hex = '6161124242'
//  Convert characters to Dec
//  decimal = '9797126666'

// ====  
// 1. Convert to Unicode
// 2. Make it small
/// Find smalled possible address and biggest possible address
// 0 - 48
// z - 122 
// Smallest length possible = 26
// Highest length possible = 36
// Smalles address possible = 00000000000000000000000000

// 48 to 122
// 0 to 74



/**
 * FINAL ALGORITHM
 * 1. Convert address to Character Array
 * 2. Convert address to Unicode and Unicode Array
 * 3. Subtract 48 from each element in Unicode Array to get integer range from 0 to 74
 * 4. 
 */
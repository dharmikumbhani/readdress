const wordTable = require('./words');
class Readdress {

    address = '';
    scaledDownArray = [];
    arrayParts = {
        firstPart: [],
        secondPart: [],
        thirdPart: [],
    }
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
        this.scaledDownArray = reducedRangeUnicodeArray;
        return reducedRangeUnicodeArray;
    }
    
    // Split and Concat
    splitAndConcat(){
        const len = this.address.length;
        // Divide unicode array into three parts
            let split = this.scaledDownArray.length / 3;
            let firstPart = this.scaledDownArray.slice(0, split);
            let secondPart = this.scaledDownArray.slice(split, split*2);
            let thirdPart = this.scaledDownArray.slice(split*2);

            // this.arrayParts.firstPart = firstPart;
            // this.arrayParts.secondPart = secondPart;
            // this.arrayParts.thirdPart = thirdPart;

            this.arrayParts.firstPart = this.concatDigits(firstPart);
            this.arrayParts.secondPart = this.concatDigits(secondPart);
            this.arrayParts.thirdPart = this.concatDigits(thirdPart);

            console.log(JSON.stringify(this.arrayParts, null, 2));

            // console.log(firstPart);
            // console.log(secondPart);
            // console.log(thirdPart);

    }

    concatDigits(arr) {
        let result = '';
        for(let i = 0; i < arr.length; i++){
            result = result.concat(JSON.stringify(arr[i]));
        }
        return result;
    }


    // Map To WordTable 
    mapToWordTable(){
        let wordAddress = '';
        console.log(wordTable.length);
        const primeNumber = 370091;
        const firstIndex = this.arrayParts.firstPart % primeNumber;
        const secondIndex = this.arrayParts.secondPart % primeNumber;
        const thirdIndex = this.arrayParts.thirdPart % primeNumber;
        console.log('Indices: ', firstIndex, secondIndex, thirdIndex);
        const firstWord = wordTable[firstIndex];
        const secondWord = wordTable[secondIndex];
        const thirdWord = wordTable[thirdIndex];
        wordAddress = firstWord + '.' + secondWord + '.' + thirdWord;
        console.log('Word Address: ', wordAddress);
        return wordAddress;
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

// 511001061091049910711070719 % 4499969
// 4479854


/**
 * FINAL ALGORITHM
 * 1. Convert address to Character Array
 * 2. Convert address to Unicode and Unicode Array
 * 3. Subtract 48 from each element in Unicode Array to get integer range from 0 to 74
 * 4. 
 */
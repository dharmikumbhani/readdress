const AddressUtils = require('./AddressUtils.js')
const Readdress = require('./ReAddress.js');
const wordsArray = require('./words')

const addressUtility = new AddressUtils();
const address = addressUtility.generateRandomAddress();
const readdress = new Readdress(address);
const addressArray = readdress.mapAddressToArray();

// const maxUnicodeAddress = '122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122122'
// console.log(parseInt(maxUnicodeAddress));
console.log(address);
console.log(addressArray);
console.log(addressArray.length)
console.log(readdress.convertToUnicodeString());
console.log(readdress.convertToUnicodeArray());
console.log(readdress.reducedRangeUnicodeArray());
// console.log(parseInt('74747474747474747474'))
class AddressUtils {

    // address = '';
    constructor(){
        this.exampleAddresses = {
            bitcoin: '1Kztb6zgBk1jzD2Uxm1y8bQqJqMw9i3j4',
            dogeCoin: 'D6p5y1KxY4c3zXxF1C2n3jwV3Vd8wVx3Z',
            etherium: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',       
        };

        // this.address = this.generateRandomAddress();
    }
    generateRandomAddress(){
        const maxLength = 36;
        const minLength = 26;
        const length = minLength +  Math.random() * (maxLength - minLength);
        let chars = 'abcIJKdefg24EFP567hijklmnGHLMN3Oopqrstuvwxyz01890ABCDQRSTUVWXYZ';
        let finalAddress = '';
        for (let index = 0; index < length; index++) {
            const randomChar = chars.charAt(Math.floor(Math.random() * length));
            finalAddress = finalAddress + randomChar;
        }
        return finalAddress;
    }
}

module.exports = AddressUtils;
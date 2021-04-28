require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name razor ridge mixture gesture deputy flower gaze'; 
let testAccounts = [
"0x628d1454bee2b07b46795399787edf0013b52efa243d554973a4af070d102fd3",
"0xec5d030071f285d7146d3c6b2d42e42eb3aefee120f1720df9b222222318ed99",
"0x984786db0c181dc8b908c4bc70c673c69aea9171e568c2a98413da90f1ae8327",
"0x9c3fd4b2ee4f7971b07a65d64e631e82b9831ecc747bc729ae23cb1554842030",
"0x9e969652958a325e7872b47a8969fe1223e6ffa25b4d88a04383d0317d5d77f2",
"0xc31c7e2341f6cc5b6324ee985389e1c909abd5b44f17cd268b45ab560c01a206",
"0xc28551af95d32506fc022adce9807f94588d5bc93fd9433832b8efdb4d72e9c9",
"0x964adc701bee7f37c4a704d3a4036f2207d18c9b1a6eb6103379ecfea439145d",
"0x3fb2beb491eba9ba5aceef9eee3f12248ebc6764929638548e869e12ae11f810",
"0x88c7bd36afa978de40ef435ac4464276a81a91b62e035a40a03c6b3f552efae2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

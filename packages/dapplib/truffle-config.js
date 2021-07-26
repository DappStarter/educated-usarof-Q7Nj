require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind purpose gesture nature sunset general'; 
let testAccounts = [
"0x7e86e56a9ce0998399baf931a8d9f725191d9dd77411569c366f39b5175e5f58",
"0xcdfe07a5cc045ad1d45e6f18ed77e25d752ae0dc1dc349e0a3e0820bb3f619ef",
"0x74b7538290273a50b8c1f1ad78f8c695fb1cfc0b5412905a6cfe793a95e9b0bd",
"0x75e10b22f977a53a3f775c68902f99557beae8a02f2c7d54a10d053313cd9408",
"0x95503983c2ee57547795e6ba926067aee47c42490d9884d73330ca75b79dfd07",
"0xe92471814bddd95b19a0496ec725ab5a46664a98680742ffa0ddcca02c859a0e",
"0xd3becba29feae3a19b0c84ee9c8032d6aa069312d9aec9890489c7669df31837",
"0xdd065d3725818b1c6dded26072d365e52e82216999225039762bd0dd09045d69",
"0xbfacc2243debe7d0f410b9c091c343f2916035316d8fd8dd60ee32c4390f7a1e",
"0xc0a7954e41e8821ba241b2cfbbc31d5c556d75921eeb8f8e5fd1aa6a40fbb2b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



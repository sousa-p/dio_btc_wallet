const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');

const { createAccount } = require('./functions/create_account');
const { createSeed } = require('./functions/create_seed');


const network = bitcoin.networks.testnet;
const path = `m/49'/1'/0'/0'`;

const mnemonic = bip39.generateMnemonic();
const seed = createSeed(mnemonic);
const account = createAccount(seed, network, path);
const node = account.derive(0).derive(0);

let address;
address = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

console.log('Wallet Address:', address);
console.log('Private Key:', account.toWIF());
console.log('Seed:', mnemonic);


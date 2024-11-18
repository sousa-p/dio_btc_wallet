const bip32 = require('bip32');

const createAccount = (seed, network, path) => {
    let root, account;

    root = bip32.fromSeed(seed, network);
    account = root.derivePath(path);

    return account;
}

module.exports =  { createAccount };
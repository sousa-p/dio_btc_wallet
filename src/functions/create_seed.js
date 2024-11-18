const bip39 = require('bip39');

const createSeed = (mnemonic) => {
    const seed = bip39.mnemonicToSeedSync(mnemonic);

    return seed;
}

module.exports =  { createSeed };
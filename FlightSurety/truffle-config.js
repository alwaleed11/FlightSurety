var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "iron fire wish brass race today employ road job video bounce trigger";
//var mnemonic = "rare island moon base wrist behave nuclear fortune salmon dress impose wood";
module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
    //  gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};

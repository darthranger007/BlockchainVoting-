const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'when panda knife breeze evil orchard assist more trigger spirit salmon vault';
//const infuraProjectId = 'e4110b75db1742e49c82b9e6bf7ccc42';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },
  
  networks: {
  //   sepolia: {
  //     provider : () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraProjectId}`),
  //     network_id: 11155111, // Specify the network ID
  //     chain_id: 11155111,   // Specify the chain ID
  //     gas : 8000000,        // Gas sent with each transaction (default: ~6700000)
  //     confirmations: 2,     // # of confs to wait between deployments. (default: 0)
  //     networkCheckTimeout: 10000,
  // timeoutBlocks: 200,   // # of blocks before a deployment times out  (minimum/default: 50)
  //     skipDryRun: true      // Skip dry run before migrations? (default: false for public nets )
  //     // Other configuration options specific to sepolia network
  //   },
    develop: {
      port: 8545
    }
    
  }
};
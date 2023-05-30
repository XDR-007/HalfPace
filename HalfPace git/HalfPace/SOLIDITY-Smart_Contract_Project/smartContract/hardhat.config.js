require('@nomiclabs/hardhat-waffle');

const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity : '0.8.0',
  networks : {

    sepolia:{
  url: `https://eth-sepolia.g.alchemy.com/v2/SkM8uFQQQtsqkYYN0Myk8MVu2Ux97COl`,
  accounts: ['abf9b1620275c29d14ffafc883c346a32fbbfd97a0af29574e5b34963fd0b403']
  }
}
}


//seplolia:{
  //url: `https://eth-mainnet.g.alchemy.com/v2/vuwdIvzViqN3cM_ANUoHyFbqopobElnJ`,
  //accounts: ['abf9b1620275c29d14ffafc883c346a32fbbfd97a0af29574e5b34963fd0b403']


# Ethereum Pools Reserves and Prices on zkSync

This repository contains a script to fetch the reserves of four different Ethereum pools and calculate the price of Wrapped Ether (WETH) in each pool.

## Requirements

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [ethers.js](https://docs.ethers.io/v5/) library

## Installation

1. Clone the repository or download the code:

```bash
git clone https://github.com/codeesura/ethereum-pools-reserves-prices-on-zksync.git
```

2. Navigate to the project directory:

```bash
cd ethereum-pools-reserves-prices-on-zksync
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

1. Ensure that you have set the correct contract addresses and ABI in the script.

2. Run the script:

```bash
node index.js
```

3. The script will fetch the reserves of each pool and calculate the WETH price. The output will be displayed in the console.

## Output

The script will output the following information:

- Total USDC and ETH reserves for each pool
- WETH price in each pool

Example output:

```bash
---------------Pool Info---------------------
Pool_1 total USDC reserves : 21111192.067123
Pool_1 total ETH reserves : 11612.470491771504
Pool_1 total USDC reserves : 4570357.23589
Pool_2 total ETH reserves : 2512.2030075100565
Pool_1 total USDC reserves : 2959333.917799
Pool_3 total ETH reserves : 1629.5443939465895
Pool_1 total USDC reserves : 5716834.749605
Pool_4 total ETH reserves : 3151.5360779253183
---------------Pricies---------------------
Pool_1 WETH price : 1817.9759493970043
Pool_2 WETH price : 1819.262703781197
Pool_3 WETH price : 1816.0498902590784
Pool_4 WETH price : 1813.9835966493008
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.




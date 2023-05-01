const { ethers } = require("ethers");

const contractABI_myContract = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getReservesFromPools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reserve0_pool1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve1_pool1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve0_pool2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve1_pool2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve0_pool3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve1_pool3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve0_pool4",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve1_pool4",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pool1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pool2",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pool3",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pool4",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
async function get() {
  // Connect to Ethereum network using ethers.js
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.era.zksync.io');

  // Set contract addresses and ABI
  const contractAddress_myContract = "0x0A3697050A8030db921b402A09d8aE64e22316b0"; // That my contract address

  // Create contract instances
  const myContractInstance = new ethers.Contract(contractAddress_myContract, contractABI_myContract, provider);

  const reserves_Pools = await myContractInstance.getReservesFromPools();
  console.log("---------------Pool Info---------------------");
  console.log("Pool_1 total USDC reserves :",reserves_Pools.reserve0_pool1.toString() / 1e6);
  console.log("Pool_1 total ETH reserves :",reserves_Pools.reserve1_pool1.toString() / 1e18);
  console.log("Pool_1 total USDC reserves :",reserves_Pools.reserve0_pool2.toString() / 1e6);
  console.log("Pool_2 total ETH reserves :",reserves_Pools.reserve1_pool2.toString() / 1e18);
  console.log("Pool_1 total USDC reserves :",reserves_Pools.reserve0_pool3.toString() / 1e6);
  console.log("Pool_3 total ETH reserves :",reserves_Pools.reserve1_pool3.toString() / 1e18);
  console.log("Pool_1 total USDC reserves :",reserves_Pools.reserve0_pool4.toString() / 1e6);
  console.log("Pool_4 total ETH reserves :",reserves_Pools.reserve1_pool4.toString() / 1e18);

  const pool1_reserve0 = reserves_Pools.reserve0_pool1 / 1e6;
  const pool1_reserve1 = reserves_Pools.reserve1_pool1 / 1e18;
  const pool2_reserve0 = reserves_Pools.reserve0_pool2 / 1e6;
  const pool2_reserve1 = reserves_Pools.reserve1_pool2 / 1e18;
  const pool3_reserve0 = reserves_Pools.reserve0_pool3 / 1e6;
  const pool3_reserve1 = reserves_Pools.reserve1_pool3 / 1e18;
  const pool4_reserve0 = reserves_Pools.reserve0_pool4 / 1e6;
  const pool4_reserve1 = reserves_Pools.reserve1_pool4 / 1e18;

  const pool1_calculate = pool1_reserve0 / pool1_reserve1 ;
  const pool2_calculate = pool2_reserve0 / pool2_reserve1 ;
  const pool3_calculate = pool3_reserve0 / pool3_reserve1 ;
  const pool4_calculate = pool4_reserve0 / pool4_reserve1 ;
  console.log("---------------Pricies---------------------");
  console.log("Pool_1 WETH price :",pool1_calculate);
  console.log("Pool_2 WETH price :",pool2_calculate);
  console.log("Pool_3 WETH price :",pool3_calculate);
  console.log("Pool_4 WETH price :",pool4_calculate);
}
get()

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IPool {
    function getReserves() external view returns (uint256 reserve0, uint256 reserve1, uint256 blockTimestampLast);
}
interface IGetReserves {
    function getReserves() external view returns (uint256 _reserve0, uint256 _reserve1);
}

contract MyContract {
    address public pool1;
    address public pool2;
    address public pool3;
    address public pool4;

    constructor() {
        pool1 = 0x80115c708E12eDd42E504c1cD52Aea96C547c05c;
        pool2 = 0xDFAaB828f5F515E104BaaBa4d8D554DA9096f0e4;
        pool3 = 0xD0cE094412898760C2A5e37AbeC39b0E785b45aE;
        pool4 = 0xcD52cbc975fbB802F82A1F92112b1250b5a997Df;
    }

    function getReservesFromPools() public view returns (
        uint256 reserve0_pool1, uint256 reserve1_pool1,
        uint256 reserve0_pool2, uint256 reserve1_pool2,
        uint256 reserve0_pool3, uint256 reserve1_pool3,
        uint256 reserve0_pool4, uint256 reserve1_pool4
    ) {
        (reserve0_pool1, reserve1_pool1) = IGetReserves(pool1).getReserves();
        (reserve0_pool2, reserve1_pool2, ) = IPool(pool2).getReserves();
        (reserve0_pool3, reserve1_pool3, ) = IPool(pool3).getReserves();
        (reserve0_pool4, reserve1_pool4, ) = IPool(pool4).getReserves();
    }
}

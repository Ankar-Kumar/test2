// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
//0x53904EA63587181cfb6986253BCC2fCBe0a281C4
contract ChaiApp{
    uint256 a=20;
    function getMsg() public pure returns(string memory){
        return "my name is ankar ";
    }
    function changeA(uint256  _a)public{
       a=_a;
    }
    function getA() public view returns(uint256){
        return a;
    }

}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./HoneypotToken.sol";

contract DexExample is Ownable {
    HoneypotToken public honeypotToken;

    uint256 public rate;

    constructor(address honeypotToken_, uint256 rate_) {
        honeypotToken = HoneypotToken(honeypotToken_);
        rate = rate_;
    }

    function sellTokens(uint256 amount) external {
        uint256 value = amount * rate;

        honeypotToken.transferFrom(_msgSender(), address(this), amount);

        // payable(_msgSender()).transfer(value);
    }
}

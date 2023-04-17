import { ethers } from "hardhat";
import { HoneypotToken } from "../typechain-types";

export class HoneypotTokenContract {
  protected contract: HoneypotToken | null = null;

  async setup() {
    const [deployer, alice, bob] = await ethers.getSigners();

    this.contract = await (
      await ethers.getContractFactory("HoneypotToken")
    ).deploy();

    return {
      contract: this.contract,
      deployer,
      alice,
      bob,
    };
  }
}
export const honeypotToken = new HoneypotTokenContract();

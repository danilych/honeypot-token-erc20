import { ethers } from "hardhat";
import { honeypotToken } from "./honeypot-token.contract";
import { DexExample } from "../typechain-types";

export class DexExampleContract {
  protected contract: DexExample | null = null;

  async setup() {
    const [deployer, alice, bob] = await ethers.getSigners();

    const { contract } = await honeypotToken.setup();

    this.contract = await (
      await ethers.getContractFactory("DexExample")
    ).deploy(contract.address, 10);

    return {
      dexContract: this.contract,
      tokenContract: contract,
      deployer,
      alice,
      bob,
    };
  }
}
export const dexExample = new DexExampleContract();

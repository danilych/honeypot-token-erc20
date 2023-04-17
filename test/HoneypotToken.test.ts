import { expect } from "chai";
import { honeypotToken } from "./honeypot-token.contract";
import { dexExample } from "./dex-example.contract";

describe("HoneypotToken", function () {
  context("IAM", async () => {
    it("init owner", async () => {
      const { deployer, contract } = await honeypotToken.setup();

      await expect(await contract.owner()).to.be.equal(deployer.address);
    });
  });

  context("Honeypot", async () => {
    it("Owner can sell tokens", async () => {
      const { deployer, dexContract, tokenContract } = await dexExample.setup();

      await tokenContract.connect(deployer).approve(dexContract.address, 10);

      await expect(dexContract.sellTokens(10)).to.changeTokenBalance(
        tokenContract,
        deployer.address,
        -10
      );
    });

    it("User can not sell tokens", async () => {
      const { alice, dexContract, tokenContract } = await dexExample.setup();

      await tokenContract.connect(alice).approve(dexContract.address, 10);

      await expect(dexContract.connect(alice).sellTokens(10)).to.be.revertedWith(
        "ERC20: insufficient allowance"
      );
    });
  });
});

import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.THIRDWEB_ADDRESS) {
  throw new Error("Third web address missing in .env file");
}
const app = sdk.getAppModule(process.env.THIRDWEB_ADDRESS);

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "SupportUkraineDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "sUKR",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
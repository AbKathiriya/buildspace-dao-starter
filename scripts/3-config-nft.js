import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DROP_MODULE_ADDRESS) {
  throw new Error("DROP_MODULE_ADDRESS missing in .env file");
}

const bundleDrop = sdk.getBundleDropModule(process.env.DROP_MODULE_ADDRESS);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Support Ukraine NFT",
        description: "This NFT will give you access to SupportUkraineDAO!",
        image: readFileSync("scripts/assets/Support_ukraine_nft.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

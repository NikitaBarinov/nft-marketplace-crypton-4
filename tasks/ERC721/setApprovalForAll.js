const fs = require('fs');
const dotenv = require('dotenv');
task("setApprovalForAll", "Create token")
.setAction(async (taskArgs) => {
  const network = hre.network.name;
  const envConfig = dotenv.parse(fs.readFileSync(`.env-${network}`));
  for (const parameter in envConfig) {
    process.env[parameter] = envConfig[parameter];
  }
  const [first, second] = await hre.ethers.getSigners();
  const ramsesURI = (testData.metadata).toString();
 
  const tradingFloor = await hre.ethers.getContractAt("ACDM721", process.env.ERC721_ADDRESS);

  const result = await tradingFloor.connect(second)
                    .setApprovalForAll(
                      process.env.BRIDGE_ADDRESS,
                      true
                    );
    
  console.log('Transaction hash:',result.hash);
});

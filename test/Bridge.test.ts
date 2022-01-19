import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
const { expect } = require("chai");
const { ethers } = require("hardhat");
import { Contract, ContractFactory } from "ethers";
const testData  = require("./fixtures/nft-metadata.json");

describe('Bridge contract', () => {
    let 
        Token: ContractFactory, 
        token1: Contract, 
        token2: Contract, 
        bridge1: Contract, 
        bridge2: Contract, 
        Bridge: ContractFactory, 
        owner: SignerWithAddress, 
        addr1: SignerWithAddress, 
        addr2: SignerWithAddress;
       
    const zero_address = "0x0000000000000000000000000000000000000000";
    const ramsesURI = (testData.metadata).toString();
    const tokenId: Number = 1;
    const nonce: Number = 3;
    const chainTo: Number = 97;
    const chainFrom: Number = 42;

    before(async () => {
        [addr1, owner, addr2] = await ethers.getSigners();
        Token = await ethers.getContractFactory("ACDM721");
        Bridge = await ethers.getContractFactory("Bridge"); 
        
    });
    
    beforeEach(async () => {
        token1 = await Token.connect(owner).deploy();
        await token1.deployed();

        bridge1 = await Bridge.connect(owner).deploy(owner.address, token1.address);
        await bridge1.deployed();

        token2 = await Token.connect(owner).deploy();
        await token2.deployed();

        bridge2 = await Bridge.connect(owner).deploy(owner.address, token2.address);
        await bridge2.deployed();
        
        token1.connect(owner).createToken(owner.address,ramsesURI);
        token1.connect(owner).createToken(addr1.address,ramsesURI);

        token2.connect(owner).createToken(owner.address,ramsesURI);
        token2.connect(owner).createToken(addr1.address,ramsesURI);
    });

    describe('Deployment', () => {
        it('Should set right name', async () => {
            expect(await token1.name()).to.equal("Metaverse Token");
            expect(await token2.name()).to.equal("Metaverse Token");
        });

        it('Should set right symbol', async () => {
            expect(await token1.symbol()).to.equal("MET");
            expect(await token2.symbol()).to.equal("MET");
        }); 

        it('Should set right owner for tokens', async () => {
            expect(await token1.owner()).to.equal(owner.address);
            expect(await token2.owner()).to.equal(owner.address);
        });

        it('Should set right balance for owner address and addr1 address', async () => {
            expect(await token1.balanceOf(owner.address)).to.equal(1);
            expect(await token2.balanceOf(owner.address)).to.equal(1);
            expect(await token1.balanceOf(addr1.address)).to.equal(1);
            expect(await token2.balanceOf(addr1.address)).to.equal(1);         
        });
    });

    describe('Transactions', () => {
        it('swap: should swap tokens', async () => {
            await token1.connect(owner).setApprovalForAll(bridge1.address, true);

            await expect(bridge1.connect(owner).swap(tokenId, chainTo, nonce))
            .to.emit(bridge1, "SwapInitialized")
            .withArgs(owner.address, tokenId, 31337, chainTo, nonce);
            let finalBalance = await token1.connect(owner).balanceOf(owner.address);
            expect(0).to.equal(finalBalance);
        });

        it('redeem: should redeem token', async () => {
            await token1.connect(owner).setApprovalForAll(bridge1.address, true);
            
            // const result = await tradingFloor.connect(second)
            //                   .redeem(
            //                     taskArgs.tokenId,
            //                     4,
            //                     1,
            //                     v,
            //                     r,
            //                     s
                              
            //                   );
            
            const types = [
                'address', 'uint256', 'uint256', 'uint256', 'uint256',
              ];
        
            const values = [
                owner.address, tokenId, 31337, chainTo, nonce
            ];
            //msg.sender, tokenId, block.chainid, chainTo, nonce
            const hash1 = ethers.utils.solidityKeccak256(types, values);
            
            const sign = await owner.signMessage(ethers.utils.arrayify(hash1));
            // const messageHash = ethers.utils.hashMessage(sign);
            const { v, r, s } = ethers.utils.splitSignature(sign);
            
            
         //   console.log(v,"mmm",r,"mmm",s);
        
            console.log("owner",owner.address);

            console.log("Validator",await bridge1.validator())

            await token1.connect(owner).setApprovalForAll(bridge1.address, true);

            await bridge1.connect(owner).swap(tokenId, chainTo, nonce);
           
            
            console.log("000",await bridge1.connect(owner).redeem(tokenId, 31337, nonce, v, r, s));
            
            
            await expect(bridge1.connect(owner).redeem(tokenId, 31337, nonce, v, r, s))
            .to.emit(bridge1, "SwapRedeemed")
            .withArgs(owner.address, tokenId, chainTo, 31337, nonce);
        });
    });
});

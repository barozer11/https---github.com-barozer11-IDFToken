const hre = require("hardhat");

const tokens = (nToken)=>{
    return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main(){
    // Deploy Token Contract
    const _initialSupply = tokens(5000000);

    const DonatingIDF = await hre.ethers.getContractFactory("DonatingIDF");
    const donatingIDF = await DonatingIDF.deploy(_initialSupply);

        await donatingIDF.deployed();
        console.log(`DonatingIDF : ${donatingIDF.address} `);


    // token Sale Contract 

    const _tokenPrice = tokens(0.1);

    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy( donatingIDF.address , _tokenPrice);

    await tokenSale.deployed();
    console.log(`TokenSale : ${tokenSale.address}`);

}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})

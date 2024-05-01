import React, { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

import {
  CheckIfWalletIsConnected,
  connectWallet,
  connectingTOKENCONTRACT,
  getBalance,
  connectingTOKEN_SALE_CONTRACT,
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {


  // State Variables
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [nativeToken, setNativeToken] = useState("");
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState("");
  const [currentHolder, setCurrentHolder] = useState("");

  // Fetch Contract Data

  const fetchInitialData = async () => {
    try {
      // Get User Account
      const account = await CheckIfWalletIsConnected();
      // Get the Balcance Of the user
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);
      console.log(account);

      // Token Contract
      const TOKEN_CONTRACT = await connectingTOKENCONTRACT();
      console.log(TOKEN_CONTRACT);

      let tokenBalance;

      if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
      } else {
        tokenBalance = 0;
      }

      // get all token data
      const tokenName = await TOKEN_CONTRACT.name();
      const tokenSymbol = await TOKEN_CONTRACT.symbol();
      const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
      const tokenStandard = await TOKEN_CONTRACT.standard();
      const tokenHolders = await TOKEN_CONTRACT._userId();
      const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
      const tokenAddress = await TOKEN_CONTRACT.address;

      const nativeToken = {
        tokenAddress: tokenAddress,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        tokenOwnerOfContract: tokenOwnerOfContract,
        tokenStandard: tokenStandard,
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolders: tokenHolders.toNumber(),
      };

      setNativeToken(nativeToken);
      // Getting Token Holders
      const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
      setTokenHolders(getTokenHolder);

      // Getting Token Holders Data
      //this if to check if user have an account connected
      if (account) {
        const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
          account
        );
        const currentHolder = {
          tokenId: getTokenHolderData[0].toNumber(),
          from: getTokenHolderData[1],
          to: getTokenHolderData[2],
          totalToken: ethers.utils.formatEther(
            getTokenHolderData[3].toString()
          ),
          tokenHolder: getTokenHolderData[4],
        };
      }

      setCurrentHolder(currentHolder);

      // Token Sale Contract
      const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALE_CONTRACT();
      const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
      const tokenSold = await TOKEN_SALE_CONTRACT.tokenSold();
      const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf(
        "0x8fb51077ED89b623206dE1863624486Ccf0205d0"
      );

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokenSold: tokenSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
      };

      setTokenSale(tokenSale);

      console.log(tokenSale);
      // console.log(currentHolder);
      // console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  //Buy Token

  const buyToken = async (nToken) => {
    try {
      const amount = ethers.utils.parseUnits(nToken.toString(), "ether");
      const contract = await connectingTOKEN_SALE_CONTRACT();
      const buying = await contract.buyToken(nToken, {
        value: amount.toString(),
      });

      await buying.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Native Token Transfer
  const transferNativeToken = async () => {
    try {
      const TOKEN_SALE_ADDRESS = "0x8fb51077ED89b623206dE1863624486Ccf0205d0";
      const TOKEN_AMOUNT = 500;
      const tokens = TOKEN_AMOUNT.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectingTOKENCONTRACT();
      const transaction = await contract.transfer(
        TOKEN_SALE_ADDRESS,
        transferAmount
      );

      console.log(contract);
      await transaction.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        buyToken,
        connectWallet,
        setAddress,
        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

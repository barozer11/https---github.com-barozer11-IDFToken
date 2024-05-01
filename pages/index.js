import React from "react";
import { useStateContext } from "../Context/index";
import {     
  Header,
  About,
  Banner,
  Contact,
  Distribution,
  Footer,
  Service,
  Team,
  TokenSale,
Chat } from "../Components/index";
  

const index = () => {
  const {
    transferNativeToken,
    buyToken,
    connectWallet,
    setAddress,
    TOKEN_ICO,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
  } = useStateContext();

  return (
    <div className="v_dark">
    <Header address={address}
            setAddress={setAddress}
            connectWallet={connectWallet}/>
    <Banner transferNativeToken= {transferNativeToken} />
    <Service/>
    <About/>
    {/* <Distribution/> */}
    <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
    <Chat/>
    <Team/>
    <Contact/>
    <Footer />
    </div>
  );};

export default index;

import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [characterName, setCharName] = useState(undefined);

  //LIST OF PRIZES
  let characterList = ["IPHONE 16 PRO", "TOYOTA VIOS", "HONDA WAVE", "BICYCLE", "REFRIGERATOR"];
  let inventoryList = new Array();

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }

  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait()
      getBalance();
    }
  }

  const withdraw = async() => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait()
      getBalance();
    }
  }
  
  /*Calls the function getCharaName from the contract to get updated character name from the contract
    Calls the function getBalance from this javascript file to update the balance in the page*/
    const getCharName = async() => {
      if (atm) {
       setCharName((await atm.getCharaName()));
      }
      getBalance();
    }

  //Generates a random character name from a pool of character names
  const gacha = async() => {
    if(balance != 0){
      let x = Math.floor(Math.random() * 5);
      let charName = "";

      switch(x){
      
        case 0:
          
          charName = characterList[0];
          break;
        case 1:
          
          charName = characterList[1];
          break;
        case 2:
          
          charName = characterList[2];
          break;
        case 3:
          
          charName = characterList[3];
          break;
        case 4:
          
          charName = characterList[4];
          break;
        default:
          break;

      }
      if (atm) {
        let tx = await atm.assignCharName(charName);
        await tx.wait()
        getCharName();
      }
    }
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    if (characterName == undefined){
      getCharName();
    }

    return (
      <div>
        <p>You Have Won: {characterName}</p>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <button onClick={deposit}>MINT 1 ETH</button>
        <button onClick={withdraw}>BURN 1 ETH</button>
        <button onClick={gacha}>Generate Mystery Item(Costs 1 ETH)</button>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1>Welcome to DanBank</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}

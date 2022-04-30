import { ethers } from 'ethers';
import React, {useState} from 'react';
import Contract_abi from '../../Contract/contract_abi.json'



const CTA= () => {

  let contractAddress = '0xf6F3f86BAeF8d133b038038EbdbDfD02EEd17eaA';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [currentContractVal, setCurrentContractVal] = useState(null);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);


  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				// setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

  const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

  const updateEthers = () =>{
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);
		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress , Contract_abi , tempSigner);
		setContract(tempContract);
	}




  return(

      <div>
      <div className='cta'>
      <a  onClick={connectWalletHandler} className='btn'>Mint</a>
      <a href='https://opensea.io/' className=' btn btn-primary'>Our Collection</a> 
      </div>
      <div className='cta'>
         <h5> Your Address: {defaultAccount}</h5>
      </div>

      </div>
      
        //  {/* <h5> Your Address: {defaultAccount}</h5> */}
     
        
    //   {/* <div className='cta_text'>
    //   <h5 className='text-light'>Head to Opensea to see the Collection.</h5>
    // </div> */}

   

 
  )
}

export default CTA;
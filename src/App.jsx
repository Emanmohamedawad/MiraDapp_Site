import React from 'react'
import Header from './companents/Header/header';
import Nav from './companents/Nav/Nav';
import About from './companents/About/About';
import Team from './companents/Team/Team';
import Roadmap from './companents/Roadmap/Roadmap';
import FQA from './companents/FAQ/FAQ';
import Footer from './companents/Footer/Footer';
// import Web3 from 'web3';
// import axios from 'axios';


// const ADDRESS = "0x0aA3dB8776B75e16628ec5Ac4330FA65b5376FF2";
// const apikey = "PS72K7NWSV7GWFT1W1SWV1RY3RU7P5SEQ5";
// const endpoint = "https://api-rinkeby.etherscan.io/api"

// async function connectwallet() { 
//       if (window.ethereum) { 
//       var web3 = new Web3(window.ethereum); 
//       await window.ethereum.send('eth_requestAccounts'); 
//       var accounts = await web3.eth.getAccounts(); 
//       account = accounts[0]; 
//       document.getElementById('wallet-address').textContent = account; 
//       contract = new web3.eth.Contract(ABI, ADDRESS);
//       }
// }
// async function mint() {
//       if (window.ethereum) { 
//         var _mintAmount = Number(document.querySelector("[name=amount]").value); 
//         var mintRate = Number(await contract.methods.cost().call()); 
//         var totalAmount = mintRate * _mintAmount; 
//       contract.methods.mint(account, _mintAmount).send({ from: account, value: String(totalAmount) }); 
//       }
//     } 

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			balance: [],
// 		};
// 	}

// 	async componentDidMount() {
// 		const etherscan = await axios.get(endpoint + `?module=stats&action=tokensupply&contractaddress=${ADDRESS}&apikey=${apikey}`);

// 		let { result } = etherscan.data;
// 		this.setState({
// 		 balance: result,
// 		});
//   }




const App = () =>{

    // const {balance} = this.state;
    return(
        <>
            <Header />
            <Nav />
            <About /> 
            <Team /> 
            <Roadmap />
            <FQA />
            <Footer/> 
        </>
    )
}

export default App
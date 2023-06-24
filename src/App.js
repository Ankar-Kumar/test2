
import './App.css';
import Abi from './ABI.json';
import { useState,useEffect } from 'react';
import Web3 from 'web3';
function App() {
  const [message, setMessage] = useState("you are wrong");
  const [valueA, setValueA] = useState("null");
 const [state, setstate] = useState({
  contract:null,
  web3:null
 })
 
  useEffect(() => {
    const {contract}=state;
    const msgshow=async()=>{
      const msg = await contract.methods.getMsg().call();
       setValueA(await contract.methods.getA().call());
       console.log(valueA)
      setMessage(msg);
    }
    contract && msgshow();
  }, [state])
  
 
    const changeMsg=async()=>{
          try {
						const web3 = new Web3(window.ethereum);
						await window.ethereum.request({ method: 'eth_requestAccounts' });
						const contract = new web3.eth.Contract(
							Abi,
							'0x65f18186eB039D96C33850e85a67e978Fb55A2F9'
						);
						setstate({ web3: web3, contract: contract });
					} catch (error) {
						alert('plz install metamask');
					}
    }
  return (
		<div className='App'>
			{message} <br />
			<p>value is {valueA}</p>
			<br />
			<button onClick={changeMsg}>change</button>
		</div>
	);
}

export default App;

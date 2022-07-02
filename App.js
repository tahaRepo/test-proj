import './App.css';
import React, { useState, useEffect} from "react";
import Axios from "axios";
function App() {

  const [bankAccountnumber,setAccno] = useState('')
  const [bankName,setBankName] = useState('')
  const [CNIC,setCnic] = useState('')
  const [Amount,setAmount] = useState('')
  const [Email,setEmail] = useState('')
  const [Mobilenum,setMobilenum] = useState('')

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setAccno(response.data);
    });
  }, [])

  const submitData = () => {
    Axios.post("http://localhost:3001/", {transactionID: transactionID ,dateTime: dateTime, CNIC: CNIC, amount: amount, email: email ,Address,BankID,MobileNumber});
  };

  return (
    <div className="App">
      <h1>Dummy Payment Gateway</h1>
      <div className="form">
      <label>Bank Account Number</label><input type="text" name="bankAccountnumber" onChange={(e)=>{
        setAccno(e.target.value)
      }}></input>
      <label>Bank Name</label><input type="text" name="bankName" onChange={(e)=>{
        setBankName(e.target.value)
      }}></input>
      <label>CNIC number</label><input type="text" name="CNIC" onChange={(e)=>{
        setCnic(e.target.value)
      }}></input>
      <label>Amount</label><input type="text" name="Amount" onChange={(e)=>{
        setAmount(e.target.value)
      }}></input>
      <label>Email</label><input type="text" name="Email" onChange={(e)=>{
        setEmail(e.target.value)
      }}></input>
      <label>Mobile Number</label><input type="text" name="Mobilenum" onChange={(e)=>{
        setMobilenum(e.target.value)
      }}></input>
      <button onClick={submitData}>Submit</button>

      {bankAccountnumber.map((val)=>{
      })};
      </div>
    </div>
  );
}

export default App;

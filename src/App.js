
import { useState } from 'react';
import './App.css';
import  {UC} from './passchar.jsx';
import  {SC} from './passchar.jsx';
import  {LC} from './passchar.jsx';
import  {NC} from './passchar.jsx';

function App() {

  let [uppercase,setuppercase] =useState(false);
  let [lowercase,setlowercase] =useState(false);
  let [Specialchar,setSpecialchar] =useState(false);
  let [number,setnumber] =useState(false);
  let [passwordL,setpasswordL] =useState(10);
  let [password,setpassword] =useState("");

  let createPassword =()=>{
    let finalpass='';
    let charset = '';
    if(uppercase ||lowercase ||Specialchar ||number) {

      if(uppercase){charset += UC;}
      if(lowercase){charset += LC;}
      if(Specialchar){charset += SC;}
      if(number){charset += NC;}

      for(let i=0 ; i < passwordL; i++)
      {
        finalpass += charset.charAt(Math.floor(Math.random()* charset.length));
        console.log('finalpass=====>>>',finalpass)
      }
      setpassword(finalpass);
    } else {
      alert('Please select at least one checkbox')
    }
  }

  let copypassword = ()=>{
    navigator.clipboard.writeText(password);
    alert('Password copied successfully');
  }

  return (
    <div>
    <div className="passwordBox ">
     <h1>Password Generator</h1>
     <div className="passwordBoxin">
     <input type='text' value={password}/><button 
      onClick={copypassword}>Copy</button>
     </div>

     <div className='passLength'>
      <label>Password Length:</label>
      <input type='number' max={20} min={10} value={passwordL} onChange= 
      {(event)=>setpasswordL(event.target.value)}/>
     </div>

     <div className='passLength'>
      <label>Including Uppercase Letters :</label>
      <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)}/>
     </div>
     
     <div className='passLength'>
      <label>Including lowercase Letters :</label>
      <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)}/>
     </div>

     <div className='passLength'>
      <label>Including  Number :</label>
      <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
     </div>

     <div className='passLength'>
      <label>Including  Special charchater :</label>
      <input type='checkbox' checked={Specialchar} onChange={()=>setSpecialchar(!Specialchar)}/>
     </div>

    <button className='btn' type='submit' onClick={createPassword}>Generate Password</button>

    </div>
    </div>
  );
}

export default App;

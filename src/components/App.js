import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
 const [isClicked, setIsClicked]=useState(true);
 const  [clsName, setClsName]=useState('redColor')

 const handleButton=()=>{
    if(isClicked){
       
      setClsName('blueColor')
      setIsClicked(false)
    }
    else{
      setClsName('redColor')
      setIsClicked(true)
    }
 }
  return (
    <div id="main">
      <p className={isClicked?clsName:clsName} >Newton School</p>
      <button id='button' onClick={handleButton}>Change Style</button>
    </div>
  )
}


export default App;

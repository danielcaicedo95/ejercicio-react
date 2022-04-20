import React from "react";
import "./style.css";
import {useState} from "react"



function Head(){
  return (
    <div className="head-container" style={headContainer}>
      <img 
      style={imgHead}
      src="https://www.iconpacks.net/icons/2/free-click-icon-2384-thumb.png"
      alt="Hola" />

      <h1>
        Contador de Clicks
      </h1>
      </div>
  );
};

function Count(props){
  return (
    <div className="count">
      <span  id="count"> {props.numClick}</span>
      </div>
  )
}


function Button({text, buttonType, click}){
  return(
    <div className="buttons">
      <button className={ buttonType? "more": "less" } onClick={click}>
      {text}
    </button>
      </div>
    
    
  );
  
};



export default function App() {

const[numClick, setNumclicks] = useState(0);
  
  const clickMore =()=>{
    setNumclicks(numClick+1)
    
  }

  const clickLess =()=>{
    setNumclicks(numClick-1)
  }
  
  return (
    <div>
      <Head />
      <Count
      numClick={numClick} />
      <Button 
      text="click"
      buttonType={true}
      click={clickMore}  />
       <Button 
      text="less"
      buttonType={false}
      click={clickLess}  />
    </div>
  );
};

const headContainer={
  display:"flex",
  justifyContent: "space-around",
  width: "500px",
  margin: "auto",
  border: "1px solid "

};

const imgHead={
  width:"60px"
}


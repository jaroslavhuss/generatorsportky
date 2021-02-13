import React, {useState} from 'react';
import "./App.css";
const App = () => {
  const [pocetSloupcu, setPocetSloupcu] = useState(0);
  const [generovaneHodnoty, setGenerovaneHodnoty]:any = useState([]);
  return (
    <>
    <div className="gen">
      <div className="center">
         <h2>Počet sloupců:</h2>
      </div>
      <div className="input">
        <div className="stateBtn" onClick={()=>pocetSloupcu<16?setPocetSloupcu(pocetSloupcu+1):setPocetSloupcu(16)}>+</div>
        <div className="stateNum">{pocetSloupcu}</div>
        <div className="stateBtn" onClick={()=>pocetSloupcu-1>=0?setPocetSloupcu(pocetSloupcu-1):setPocetSloupcu(0)}>-</div>
      </div>
    </div>
    {pocetSloupcu>0?<div className="center">
         <div className="stateBtn" onClick={()=>setGenerovaneHodnoty(generator(pocetSloupcu))}>vygeneruj</div>
      </div>:<></>}
      {
      generovaneHodnoty.map((arr:any, index:number)=> <div className="radek" key={index}>{index+1}. sloupec: {arr}</div>)
      }
    </>
  )
}

export default App

const generator = (sloupce:number):number[] => {
  const arr:any = [];
  for (let i = 0; i < sloupce; i++) {
    let temp:any[] = [];
      for (let x = 0; x < 6; x++) {
        //zde to vygeneruje 
        let num = Math.floor(Math.random()*50);
        num < 1 ?num++:console.log("dobrý");
        if(x === 5){
          temp.push(num)
        }else{
          temp.push(num + ", ")
        }
      }
      
      //@ts-ignore
      arr.push(temp);
  }
  return arr;
}
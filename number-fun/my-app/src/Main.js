import React, { useState, useEffect} from 'react';

function Main() {

    const [CompNum, UpdateCompNum] = useState("");
    const [HumNum, UpdateHumNum] = useState("");
    //const [NotNum, UpdateNotNum] = useState([]);
    
  
    useEffect(() => {
       UpdateCompNum(Math.floor(Math.random() * 100) + 1)
       }, []);

  
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log({HumNum})
        console.log({CompNum})
   
        if (CompNum === parseInt(HumNum)){
            document.getElementById("yay").innerHTML = 'Yay!';
            document.getElementById("again").innerHTML ='<div><button onClick={location.reload()}>Play again?</button></div>';
        } else{
          document.getElementById('yay').innerHTML = `<div><p> ${HumNum} is not the number</p></div>`
          
          }
      } 


  
    return (
    <div>
      <h1>Number Hooks</h1>
      <ul>
        <li>Built with React</li>
        <li>My first project using hooks</li>
        <li>Two state objects. Your number and the computers randomly generated number from 1 - 100.</li>
        <li>Try and get your number === the computers..</li>
      </ul>
      <p><u>Find the number</u></p>
         <form onSubmit={handleSubmit}>
            <input type="text" value={HumNum} name="name" onChange={(e) => UpdateHumNum( e.target.value)}/>
            <button id="button" type="submit">Guess</button>
         </form>
         <br></br>
         
        <p id="yay"></p>
        <p id="again"></p>
       <p id="list"></p>
    </div>
  );
}

export default Main
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
          document.getElementById('yay').innerHTML = "wrong"
          }
      } 


  
    return (
    <div>
      <h1>Number Hooks</h1>
      <p>Guess the number the computer is thinking of</p>
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
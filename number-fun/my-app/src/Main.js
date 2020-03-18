import React, { useState, useEffect} from 'react';

function Main() {

    const [CompNum, UpdateCompNum] = useState("");
    const [HumNum, UpdateHumNum] = useState("");
    //const [NotNum, UpdateNotNum] = useState([]);
    
  
    useEffect(() => {
       EasyMode()
       }, []);

  
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log({HumNum})
        console.log({CompNum})
   
        if (CompNum === parseInt(HumNum)){
            document.getElementById("yay").innerHTML = 'Yay!';
            document.getElementById("again").innerHTML ='<div><button onClick={location.reload()}>Play again?</button></div>';
        } else{
          document.getElementById('yay').innerHTML = `<div><p> ${HumNum} is incorrect</p></div>`
          
          }
      } 

   const EasyMode = () => {
      UpdateCompNum(Math.floor(Math.random() * 10) + 1)
      document.getElementById("easy").classList.add('MyClass');
      document.getElementById("normal").classList.remove('MyClass');
      document.getElementById("hard").classList.remove('MyClass');
   }

   const NormalMode = () => {
      UpdateCompNum(Math.floor(Math.random() * 50) + 1)
      document.getElementById("normal").classList.add('MyClass');
      document.getElementById("easy").classList.remove('MyClass');
      document.getElementById("hard").classList.remove('MyClass');
     
   }

   const HardMode = () => {
      UpdateCompNum(Math.floor(Math.random() * 100) + 1)
      document.getElementById("hard").classList.add('MyClass');
      document.getElementById("easy").classList.remove('MyClass');
      document.getElementById("normal").classList.remove('MyClass');
   }


  
    return (
<div>
<div>
   
   <h1>Number Fun™</h1>
   <br></br>
   <ul id="gameDesc">
      <li>Built with React</li>
      <br></br>
      <li>Try and get your number equal to the computers..</li>
   </ul>

     <ul id="gameModes">
      <li><button id="easy" onClick={EasyMode}>Easy: 1-10</button></li>
      <li><button id="normal" onClick={NormalMode}>Normal: 1-50</button></li>
      <li><button id="hard" onClick={HardMode}>Hard: 1-100</button></li>
   </ul>
   
   <p>Find the number</p>
   <hr></hr>
   <form onSubmit={handleSubmit}>
      <input type="number" value={HumNum} name="name" onChange={(e) => UpdateHumNum( e.target.value)}/>
      <button id="button" type="submit">Guess</button>
   </form>
   
   <br></br>
   <p id="yay"></p>
   <p id="again"></p>
   <p id="list"></p>
</div>
</div>
  );
}

export default Main
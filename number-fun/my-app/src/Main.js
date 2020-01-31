import React, { useState, useEffect} from 'react';

function Main() {

    const [CompNum, UpdateCompNum] = useState("");
    const [HumNum, UpdateHumNum] = useState("");

  
    useEffect(() => {
       UpdateCompNum(Math.floor(Math.random() * 100) + 1)
       }, []);

  
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log({HumNum})
        console.log({CompNum})
        if (CompNum === parseInt(HumNum)){
            document.getElementById("yay").innerHTML = 'yay';
            document.getElementById("again").innerHTML ='<div><button onClick={location.reload()}>Play again?</button></div>'
        } else{
            document.getElementById('yay').innerHTML = "wrong"
        }
}


  
    return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={HumNum} name="name" onChange={(e) => UpdateHumNum( e.target.value)}/>
            <button id="button" type="submit">click</button>
         </form>
         <br></br>
         {HumNum}
        <p id="yay"></p>
        <p id="again"></p>
    </div>
  );
}

export default Main
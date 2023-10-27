import React, {useState} from 'react';
function Hp1() {
    
    const [name,setName] = useState("Rahul");
    const [roll,setRoll] = useState(101);
    const handleClick=()=>
    {
       setName("Gudduu");
       setRoll(105); 
    }
    return(<React.Fragment>
                <h1> Name Is : {name} </h1> 
                <h2>Roll is :{roll} </h2>
                <button type='button' onClick={handleClick} >Change</button>    
    </React.Fragment>
    );
}

export default Hp1;
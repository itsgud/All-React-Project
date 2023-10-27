import React, { Fragment, useEffect, useState } from 'react';
function Hp2() {
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
         console.log("Use Effect Called");
});
    return(
        <React.Fragment>
            <h1>Count Up: {count} </h1>
            <button type="button" onClick={handleIncrement} >Increment </button>
        </React.Fragment>
    )
    
}
export default Hp2;
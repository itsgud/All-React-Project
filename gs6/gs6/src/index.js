import React from 'react';
import ReactDOM from 'react-dom';

import Student from "./Student";
import Student1 from "./Student1";
import Student2 from "./Student2";




//Rendering Component
//ReactDOM.render(<Student roll="101" />,document.getElementById("root"));

//ReactDOM.render(<Student1  />,document.getElementById("root"));

ReactDOM.render(<Student2 name="I Am App Prop" />,document.getElementById("root"));


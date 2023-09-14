//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Frutas from "./component/frutas.jsx"
import Onkeypress from "./component/onkeypress.jsx"
import Onsubmit from './component/onsubmit.jsx'

//render your react application
ReactDOM.render( < Onsubmit / > , document.querySelector("#app"));
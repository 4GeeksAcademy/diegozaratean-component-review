import React, {useState} from "react";


//create your first component
const Onkeypress = () => {
    const[input1, setInput1]= useState('');

    function clikTecla(e){
        console.log('clikTecla')
        /// imprimir la tecla
        console.log(e.key) 
        console.log(e.keyCode) 
        if(e.keyCode == 13){
            console.log('clikeaste Enter')
        }
        
    }
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Onkeypress</h1>			
            <input onKeyDown={clikTecla} type="text" onChange={(e) => {setInput1(e.target.value);}}  className="form-control" id="formGroupExampleInput2" value={input1} placeholder="Another input placeholder" />
		</div>
	);
};

export default Onkeypress;

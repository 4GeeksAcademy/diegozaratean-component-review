import React, {useState} from "react";


//create your first component
const Onsubmit = () => {
    const[input1, setInput1]= useState('');

    function enviar(e){
        e.preventDefault()
        console.log('enviar')
        console.log('clikeaste Ente')
    }
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Onsubmit</h1>		
            <form onSubmit={enviar} >
                <input type="text" onChange={(e) => {setInput1(e.target.value);}}  className="form-control" id="formGroupExampleInput2" value={input1} placeholder="Another input placeholder" />    
            </form>	            
		</div>
	);
};

export default Onsubmit;

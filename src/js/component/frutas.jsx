import React, {useState} from 'react';

const Frutas = ()=>{
    const[frutas, setFrutas]= useState(['manzana','bananos','piña','limon']);
    console.log(frutas);
    return(
        <>  
            <h1>frutas</h1>
            {frutas}
            {frutas.map((item,id) => <p>{item}</p>)}
        </>
    );
}

export default Frutas; 
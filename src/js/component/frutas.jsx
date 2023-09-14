import React, {useState} from 'react';

const Frutas = ()=>{
    const[frutas, setFrutas]= useState(['manzana','bananos','piña','limon']);
    const[fruta, setFruta]= useState('uva');
    console.log(frutas);
    
    function agregarElemento(){
        let elemnentos = ['1','2','3']
        console.log(elemnentos);
        elemnentos.push('4')
        console.log(elemnentos);
        // let fruta = 'uva'
        console.log("agregarElemento");
        console.log(frutas);
        // frutas.push('uchua')
        console.log(frutas);
        setFrutas([...frutas,fruta])

        // count 
        // setCount
        // count++ => count = count + 1
        // setCount(count++)
        // setCount(count = count + 1)
        // setCount(count + 1)
        // // Elminiar de una arrar
        // copiar el array modificarlo y este modificado asignalo al estado
        // utlizar una funcion que me genere un nuevo array
    }
    return(
        <>  
            <h1>frutas</h1>
            {frutas}
            {frutas.map((item,id) => <p key={id}>{item}</p>)}
            <button onClick={agregarElemento} >Agregar Elemento</button>
        </>
    );
}

export default Frutas; 
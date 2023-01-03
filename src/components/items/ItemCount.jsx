import React, { useState } from "react";



const ItemCount = ({valorIni}) =>{

    const [contador, setContador] = useState(valorIni)

    function incrementar(){
        setContador(contador+1)
    }

    function reducir(){
        setContador(contador-1)
    }
  
    console.log(contador)
    return(
        <>
            <button onClick={reducir}>-</button>
            <span>Contador: {contador}</span>
            <button onClick={incrementar}>+</button>
        </>
    ) 
}

export default ItemCount
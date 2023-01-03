import React from "react"
import './ItemsListContainer.css'
import ItemCount from "./ItemCount"

const ItemsListContainer = ({mensaje}) =>{
    return(
        <>
            <p>{mensaje}   <ItemCount valorIni={5}/></p>
            
        
        </>
    ) 
}

export default ItemsListContainer
import React from "react"
import './ItemsListContainer.css'
import ItemsContainer from "./ItemsContainer"

const ItemsListContainer = ({mensaje1, mensaje2, mensaje3}) =>{
    return(
        <>
            <ItemsContainer mensaje ={mensaje1}/>
            <ItemsContainer mensaje ={mensaje2}/>
            <ItemsContainer mensaje ={mensaje3}/>
            
        
        </>
    ) 
}

export default ItemsListContainer
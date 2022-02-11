import { ADDTOCART, INCREMENT } from "../types/panierTYPES.js"

export const addToCART=(item)=>{
    return {
        type:ADDTOCART,
        payload:item
    }
}

export const increment=(item)=>{
    return{
        type:INCREMENT,
    payload:item
    }
}
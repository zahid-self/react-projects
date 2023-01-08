import { ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes"

export const addToCart = (value) => {
    return {
        type : ADD_TO_CART,
        payload : value
    }
}

export const removeFromCart = (value) => {
    return {
        type : REMOVE_FROM_CART,
        payload : value
    }
}
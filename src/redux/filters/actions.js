import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export function colorChange(color, toggle){
    return{
        type: COLORCHANGED,
        payload: {
            color,
            toggle
        }
    }
}

export function statusChange(status){
    return{
        type: STATUSCHANGED,
        payload: status
    }
}


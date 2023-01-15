import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export function colorChange(color, changeType){
    return{
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}

export function statusChange(status){
    return{
        type: STATUSCHANGED,
        payload: status
    }
}


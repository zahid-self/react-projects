import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
    list:[
        {
            "id": 1,
            "title": "Canon Eos 4000D 18MP",
            "price": '36,500',
            "quantity": 10,
        },
        {
            "id": 2,
            "title": "Asus Vivobook s15",
            "price": '55,400',
            "quantity": 5,
        },
        {
            "id": 3,
            "title": "Pixel 4a 5G",
            "price": '23000',
            "quantity": 8,
        }
    ],
    cartItems : [],
    total: 0
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = state.list.find((item) => item.id === action.payload);
            let existItem = state.cartItems.find((cartItem) => cartItem.id === action.payload ? true : false);
            // if(existItem){
            //     return{
            //         ...state,
            //         cartItems: [{...existItem, quantity:  existItem.quantity + 1}]
            //     }
            // }else{
            //     addedItem.quantity = 1
            //     let newTotal = state.total + addedItem.price;
            //     return{
            //         ...state,
            //         cartItems: [...state.cartItems, addedItem],
            //         total: newTotal
            //     }
            // }
            return{
                ...state,
                cartItems: existItem ? state.cartItems.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item) : [...state.cartItems, { ...addedItem, quantity: 1  }],
                list: [...state.list,{ ...addedItem, quantity:  addedItem.quantity - 1 }]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.map((item) => item.id === action.payload ?? item.quantity - 1)
            }
        default:
            return state
    }
}
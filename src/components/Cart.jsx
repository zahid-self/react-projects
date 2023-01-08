import React from 'react'
import CartItemCount from './CartItemCount'
import CartTotalPrice from './CartTotalPrice'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  // const cartItemsPrice = useSelector((state) => state.total);
  return (

    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            {
              cartItems.map((cartItem) => (
                <CartItem title={cartItem.title} quantity={cartItem.quantity} key={cartItem.id} id={cartItem.id} />
              ))
            }
            <CartItemCount totalItem={0}/>
        </div>
        <CartTotalPrice totalPrice={0}/>
    </div>
  )
}

export default Cart
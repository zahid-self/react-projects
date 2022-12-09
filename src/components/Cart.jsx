import React from 'react'
import CartItemCount from './CartItemCount'
import CartTotalPrice from './CartTotalPrice'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <CartItem title="Asus Vivobook X515MA" quantity="0" />
            <CartItem title="Dell E1916HV 18.5 Inch" quantity="0" />
            <CartItem title="Canon Eos 4000D 18MP" quantity="0" />
            <CartItemCount totalItem={0}/>
        </div>
        <CartTotalPrice totalPrice={0}/>
    </div>
  )
}

export default Cart
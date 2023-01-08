import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const Products = () => {

  const products = useSelector((state) => state.cart.list);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
        {
          products.map((product) =>(
            <Product title={product.title} quantity={product.quantity} price={product.price} key={product.id} id={product.id} />
          ))
        }
    </div>
  )
}

export default Products
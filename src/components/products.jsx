import React from 'react'
import Banner from './Banner';
import Footer from './Footer';

import Nav from './Nav';
import Product from './Product';

const Products = () => {
  return (
    <>
        <Nav/>
        <div className="mx-auto container px-6 xl:px-0 py-12">
            <div className="flex flex-col"> 
                <Banner/>
                <div className="mt-10 grid grid-cols-4 gap-x-8 gap-y-8 items-center">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Products
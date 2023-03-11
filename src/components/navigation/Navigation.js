import React from 'react'
import Search from './Search'
import logo from "../../assets/lws.svg"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
        <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
            <Link to={"/"}>
                <img
                    class="h-10"
                    src={logo}
                    alt="Learn with Sumit"
                />
            </Link>
           <Search/>
        </div>
    </nav>
  )
}

export default Navigation
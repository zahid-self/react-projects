import React, { useState } from 'react'
import serachIcon from "../../assets/search.svg"
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../../features/filters/filtersSlice';
import { useMatch, useNavigate } from "react-router-dom"

const Search = () => {

  const dispatch = useDispatch();
  const{search} = useSelector(state => state.filters);

  const[input,setInput] = useState(search)
  const match = useMatch('/');
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(input))
    if(!match){
      navigate('/')
    }
  }

 
  
  return (
    <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
        <form onSubmit={handleSearch}>
            <input
                class="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
        <img
            class="inline h-4 cursor-pointer"
            src={serachIcon}
            alt="Search"
            onClick={() => setInput('')}
        />
    </div>
  )
}

export default Search
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tagSelected,tagRemoved } from "../../features/filters/filtersSlice"

const Tag = ({ title }) => {

  const dispatch = useDispatch();
  const{tags} = useSelector(state => state.filters);


  
  const isSelected = tags.includes(title) ? true : false;

  let style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'

  const handleSelect = () => {
    if(isSelected){
      dispatch(tagRemoved(title))
    }else{
      dispatch(tagSelected(title))
    }
  }

  return (
    <div class={style} onClick={handleSelect}>
        {title}
    </div>
  )
}

export default Tag

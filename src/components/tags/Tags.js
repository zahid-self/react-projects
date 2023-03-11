import React, { useEffect } from 'react'
import Tag from './Tag'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTagsAsync } from '../../features/tags/tagSlice'


const Tags = () => {

  const dispatch = useDispatch()
  const { tags } = useSelector(state => state.tags)


  useEffect(() => {
    dispatch(fetchTagsAsync())
  },[dispatch])

  return (
    tags?.length > 0 ?
      <section>
          <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
              { tags.map(tag => <Tag key={tag.id} title={tag.title}/>) }
          </div>
      </section>
    :
      null
  )
}

export default Tags
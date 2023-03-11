
import React,{useEffect} from 'react'
import RelatedVideoItem from './RelatedVideoItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideosAsync } from '../../features/relatedVideos/relatedVideosSlice'

const RelatedVideos = ({tags, currentVideoId}) => {


  const dispatch = useDispatch()
  const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos)

  useEffect(() => {
    dispatch(fetchRelatedVideosAsync({tags, id: currentVideoId }))
  },[dispatch,tags, currentVideoId])

  let content;

  if(isLoading && !isError) content = <div class="col-span-12">Loading...</div>

  if(!isLoading && isError) content = <div class="col-span-12">{error}</div>

  if(!isLoading && !isError && relatedVideos?.length === 0) content = <div class="col-span-12">No video found</div>

  if(!isLoading && !isError && relatedVideos?.length > 0) content = relatedVideos.map(relatedVideo => <RelatedVideoItem video={relatedVideo}/>)


  return (

    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
    </div>
    
  )
}

export default RelatedVideos
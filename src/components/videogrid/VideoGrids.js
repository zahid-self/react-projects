import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoGridItem from './VideoGridItem'
import { fetchVideosAsync } from "../../features/videos/videosSlice"

const VideoGrids = () => {

  const dispatch = useDispatch()
  const { videos, isLoading,isError,error } = useSelector(state => state.videos)
  const{tags, search} = useSelector(state => state.filters)

  useEffect(() => {
    dispatch(fetchVideosAsync({tags,search}))
  },[dispatch, tags, search])

  let content;

  if(isLoading && !isError) content = <div class="col-span-12">Loading...</div>
  if(!isLoading && isError) content = <div class="col-span-12">{error}</div>
  if(!isLoading && !isError && videos?.length === 0) content = <div class="col-span-12">No videos found</div>
  if(!isLoading && !isError && videos?.length > 0){
    content = videos.map(video => <VideoGridItem key={video.id} video={video}/>)
  }

  return (
    <section class="pt-12">
        <section class="pt-12">
            <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
               {content}
            </div>
        </section>
    </section>
  )
}

export default VideoGrids
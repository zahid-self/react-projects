import React,{useEffect} from 'react'
import Player from '../components/video/Player'
import RelatedVideos from '../components/video/RelatedVideo'
import VideoDescription from '../components/video/VideoDescription'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoAsync } from '../features/video/videoSlice'
import { useParams } from 'react-router-dom'

const Video = () => {
  const dispatch = useDispatch()
  const { video, isLoading, isError, error } = useSelector(state => state.video)
  const{videoId} = useParams()

  useEffect(() => {
    dispatch(fetchVideoAsync(videoId))
  },[dispatch,videoId])

  let content;

  let{ id, title, link, tags} = video || {};

  if(isLoading && !isError) content = <div class="col-span-12">Loading...</div>

  if(!isLoading && isError) content = <div class="col-span-12">{error}</div>

  if(!isLoading && !isError && video?.id) content = <div class="col-span-12">No video found</div>

  if(!isLoading && !isError && video?.id){
    content = 
    <div class="grid grid-cols-3 gap-2 lg:gap-8">
      <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <Player title={title} link={link}/>
          <VideoDescription video={video}/>
      </div>

    
      <RelatedVideos currentVideoId={id} tags={tags}/>
  </div>
  }


  return (
    <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            {content}
        </div>
    </section>
  )
}

export default Video
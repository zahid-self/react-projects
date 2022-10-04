import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasmore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasmore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                to={`/quiz/${video.youtubeID}`}
                state={{ videoTitle: video.title }}
                key={video.youtubeID}
              >
                <Video
                  noq={video.noq}
                  title={video.title}
                  id={video.youtubeID}
                />
              </Link>
            ) : (
              <Video
                noq={video.noq}
                title={video.title}
                id={video.youtubeID}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!error && videos.length < 0 && <p>Video not available</p>}
      {loading ?? <div>Loading...</div>}
    </div>
  );
};

export default Videos;

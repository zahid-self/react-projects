import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [videos, setVideos] = useState([]);
  const [hasmore, setHasmore] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videosListRef = ref(db, "videos");
      const videoQuery = query(
        videosListRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasmore(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasmore,
  };
};

export default useVideoList;

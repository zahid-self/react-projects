import { useEffect, useState } from "react";

const useFetch = (keyword) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  console.log(keyword, "keyword");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`,
          {
            method: "GET",
            headers: {
              Authorization: process.env.REACT_APP_PIXEL_API_KEY,
            },
          }
        );
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;

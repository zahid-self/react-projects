import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useAnswerList = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const db = getDatabase();
      const answersListRest = ref(db, "answers/" + videoID + "/questions");
      const answersQuery = query(answersListRest, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };

    fetchQuiz();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
};

export default useAnswerList;

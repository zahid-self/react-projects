import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuizList = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [quiz, setQuizes] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const db = getDatabase();
      const quizListRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizListRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuizes((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
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
    quiz,
  };
};

export default useQuizList;

import axios from "axios";

export const fetchQuizData = async (category, difficulty, amount) => {
  const response = await axios.get(`https://opentdb.com/api.php`, {
    params: { category, difficulty, amount, type: "multiple" },
  });
  return response.data.results;
};

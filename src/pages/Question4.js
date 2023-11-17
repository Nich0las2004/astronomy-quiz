import quizData from "../quizData";

import NextButton from "../components/NextButton/NextButton";
import PrevButton from "../components/PrevButton/PrevButton";

const Question4 = () => {
  const info = quizData[3];

  return (
    <div>
      <h2 key={info.id}>{info.question}</h2>

      {info.options.map((option) => (
        <>
          <input name="options" type="radio" value={option} />
          <label>{option}</label>
        </>
      ))}

      <div>
        <PrevButton previousPage="/thirdQuestion" />
        <NextButton nextPage="/fifthQuestion" />
      </div>
    </div>
  );
};

export default Question4;

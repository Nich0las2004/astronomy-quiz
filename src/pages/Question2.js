import quizData from "../quizData";

import NextButton from "../NextButton/NextButton";
import PrevButton from "../PrevButton/PrevButton";

const Question2 = () => {
  const info = quizData[1];

  return (
    <div>
      <h2 key={info.id}>{info.question}</h2>

      {info.options.map((option) => (
        <>
          <input name="options" type="radio" value={option} />
          <label>{option}</label>
        </>
      ))}

      <PrevButton previousPage="/firstQuestion" />
      <NextButton nextPage="/thirdQuestion" />
    </div>
  );
};

export default Question2;

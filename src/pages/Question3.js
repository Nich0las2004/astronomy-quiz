import quizData from "../quizData";

import NextButton from "../components/NextButton/NextButton";
import PrevButton from "../components/PrevButton/PrevButton";

const Question3 = () => {
  const info = quizData[2];

  return (
    <div>
      <h2 style={{ color: "aqua" }} key={info.id}>{info.question}</h2>

      {info.options.map((option) => (
        <>
          <input name="options" type="radio" value={option} />
          <label>{option}</label>
        </>
      ))}

      <div>
        <PrevButton previousPage="/secondQuestion" />
        <NextButton nextPage="/fourthQuestion" />
      </div>
    </div>
  );
};

export default Question3;

import quizData from "../quizData";

import PrevButton from "../components/PrevButton/PrevButton";

import SubmitButton from "../components/SubmitButton/SubmitButton";

const Question5 = () => {
  const info = quizData[4];

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
        <PrevButton previousPage="/fourthQuestion" />
        <SubmitButton submitPage="/score" />
      </div>
    </div>
  );
};

export default Question5;

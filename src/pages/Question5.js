import quizData from "../quizData";

import PrevButton from "../PrevButton/PrevButton";

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

      <PrevButton />
    </div>
  );
};

export default Question5;

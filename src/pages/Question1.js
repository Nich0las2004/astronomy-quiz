import quizData from "../quizData";

import NextButton from "../components/NextButton/NextButton";

const Question1 = () => {
  const info = quizData[0];

  return (
    <div>
      <h2 style={{ color: "aqua" }} key={info.id}>
        {info.question}
      </h2>

      {info.options.map((option) => (
        <>
          <input name="options" type="radio" value={option} />
          <label>{option}</label>
        </>
      ))}

      <div>
        <NextButton nextPage="/secondQuestion" />
      </div>
    </div>
  );
};

export default Question1;

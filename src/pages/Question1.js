import quizData from "../quizData"

const Question1 = () => {
  const info = quizData[0];

  return (
    <div>
      <h2 key={info.id}>{info.question}</h2>

      {info.options.map((option) => (
        <>
          <input name="options" type="radio" value={option} />
          <label>{option}</label>
        </>
      ))}
    </div>
  );
};

export default Question1;

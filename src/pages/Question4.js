import quizData from "../quizData";

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
    </div>
  );
};

export default Question4;

import quizData from "./quizData";

const Questions = () => {
  return (
    <div>
      {quizData.map((item) => (
        <>
          <h2 key={item.id}>{item.question}</h2>

          {item.options.map((option) => (
            <>
              <input type="radio" value={option} />
              <label>{option}</label>
            </>
          ))}
        </>
      ))}
    </div>
  );
};

export default Questions;

import quizData from "./quizData";

import classes from "./Questions.module.css";
import Submit from "./SubmitButton/SubmitButton";

const Questions = () => {
  return (
    <form class="quiz-container">
      {quizData.map((item) => (
        <div>
          <h2 key={item.id}>{item.question}</h2>

          {item.options.map((option) => (
            <>
              <input name="options" type="radio" value={option} />
              <label>{option}</label>
            </>
          ))}
        </div>
      ))}

      <Submit />
    </form>
  );
};

export default Questions;

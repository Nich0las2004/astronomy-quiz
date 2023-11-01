import { Fragment } from "react";
import quizData from "./quizData";

import classes from "./Questions.module.css";

const Questions = () => {
  return (
    <div class="quiz-container">
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
    </div>
    // <Fragment>
    //   {quizData.map((item) => (
    //     <div>
    //       <h2 key={item.id}>{item.question}</h2>

    //       {item.options.map((option) => (
    //         <>
    //           <input name="options" type="radio" value={option} />
    //           <label>{option}</label>
    //         </>
    //       ))}
    //     </div>
    //   ))}
    // </Fragment>
  );
};

export default Questions;

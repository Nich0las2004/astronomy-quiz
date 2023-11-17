import { useNavigate } from "react-router-dom";

import classes from "./NextButton.module.css";

const NextButton = ({ nextPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPage);
  };

  return (
      <button className={classes.button} onClick={handleClick}>
        Next
      </button>
  );
};

export default NextButton;

import { useNavigate } from "react-router-dom";
import classes from "./SubmitButton.module.css";

const SubmitButton = ({ submitPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(submitPage);
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      Submit
    </button>
  );
};

export default SubmitButton;

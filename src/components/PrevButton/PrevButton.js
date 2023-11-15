import { useNavigate } from "react-router-dom";
import classes from "./PrevButton.module.css";

const PrevButton = ({ previousPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(previousPage);
  };

  return <button className={classes.prevButton} onClick={handleClick}>Previous</button>;
};

export default PrevButton;

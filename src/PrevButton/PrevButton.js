import { useNavigate } from "react-router-dom";
import classes from "./PrevButton.module.css";

useNavigate;

const PrevButton = ({ previousPage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(previousPage);
  };

  return <button onClick={handleClick}>Previous</button>;
};

export default PrevButton;

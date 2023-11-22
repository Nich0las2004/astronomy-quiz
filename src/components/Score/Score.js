import classes from "./Score.module.css";

const Score = () => {
  return (
    <span>
      <p className={classes.score}>Score: </p>
      <p className={classes.actualScore}>2</p>
    </span>
  );
};

export default Score;

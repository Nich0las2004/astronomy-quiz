import quizData from "./quizData";

const App = () => {
  return (
    <div>
      <h1>Astronomy Quiz</h1>
      <p>Welcome to the astronomy quiz!</p>

      {quizData.map((item) => (
        <li key={item.id}>{item.question}</li>
      ))}
    </div>
  );
};

export default App;

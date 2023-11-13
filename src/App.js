import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";

import Score from "./Score/Score";

import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/firstQuestion" />} />
      <Route
        path="/firstQuestion"
        element={
          <>
            <h1>Astronomy Quiz</h1>
            <p>Welcome to the astronomy quiz!</p>
            <Question1 />
          </>
        }
      />
      <Route path="/secondQuestion" element={<Question2 />} />
      <Route path="/thirdQuestion" element={<Question3 />} />
      <Route path="/fourthQuestion" element={<Question4 />} />
      <Route path="/fifthQuestion" element={<Question5 />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
};

export default App;

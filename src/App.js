import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";

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
    </Routes>
  );
};

export default App;

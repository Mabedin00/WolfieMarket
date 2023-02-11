import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/loginscreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact component={Login} />
      </Routes>
    </Router>
  );
};

export default App;

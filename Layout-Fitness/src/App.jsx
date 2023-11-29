import "./App.css";
import Register from "./Components/Register";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

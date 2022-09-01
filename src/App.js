import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;

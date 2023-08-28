import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import "../styles/App.css";
import SignInPage from "../pages/SignInPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/properties" element={<Properties />} /> */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;

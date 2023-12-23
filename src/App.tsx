import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import { HomePage } from "./pages";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

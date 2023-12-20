import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

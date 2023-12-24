import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Context
import { AppContextProvider } from "./context/Context";

// Components
import { HomePage } from "./pages";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;

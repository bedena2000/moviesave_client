import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { AppContextProvider } from "./context/Context";

// Styling
import "react-loading-skeleton/dist/skeleton.css";

// Components
import { HomePage } from "./pages";
import { ErrorPage } from "./pages";
import { MoviePage } from "./pages";
import { DetailedMoviePage } from "./pages/DetailedMoviePage";
import { ActorPage } from "./pages/ActorPage";

// Context

function App() {
  return (
    <div>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage title="movies" />} />
            <Route path="/tvseries" element={<MoviePage title="tv series" />} />
            <Route
              path="/animations"
              element={<MoviePage title="animations" />}
            />
            <Route path="/movies/:movieId" element={<DetailedMoviePage />} />
            <Route path="/actor/:actorId" element={<ActorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;

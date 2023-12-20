// Components
import { Header } from "../../components";
import { MovieSlider } from "../../components";
import { GenresSlider } from "../../components";
import { MainSlider } from "../../components/custom/MainSlider";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <MovieSlider />
      <GenresSlider list={[]} />
      <MainSlider title="New Movies" />
    </div>
  );
};

export default HomePage;

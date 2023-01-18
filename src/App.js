import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./router/Route";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useScrollY } from "./hooks/useScrollY";
import ModalSeasons from "./components/modal/ModalSeasons";
import Footer from "./components/footer/Footer";
import ModalVideos from "./components/modal/ModalVideos";
import { useSelector } from "react-redux";

function App() {
  const [scollY] = useScrollY();
  const state = useSelector((state) => state);
  const moviesVideos = state.moviesRedux.moviesVideos;
  // const tvVideos = state.tvRedux.tvVideos;
  return (
    <div className="App">
      <Navbar />
      {routes}
      {scollY >= 100 && (
        <BsFillArrowUpCircleFill
          className="gotop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
      <ModalVideos videos={moviesVideos} />
      <ModalSeasons />
      <Footer />
    </div>
  );
}

export default App;

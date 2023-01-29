import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./router/Route";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useScrollY } from "./hooks/useScrollY";
import ModalSeasons from "./components/modal/ModalSeasons";
import Footer from "./components/footer/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  const [scollY] = useScrollY();
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        {routes}
      </AuthContextProvider>
      {scollY >= 100 && (
        <BsFillArrowUpCircleFill
          className="gotop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
      <ModalSeasons />
      <Footer />
    </div>
  );
}

export default App;

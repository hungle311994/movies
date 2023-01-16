import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./router/Route";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useScrollY } from "./hooks/useScrollY";
import Footer from "./components/footer/Footer";

function App() {
  const [scollY] = useScrollY();

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
      <Footer />
    </div>
  );
}

export default App;

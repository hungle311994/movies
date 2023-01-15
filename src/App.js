import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { routes } from "./router/Route";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useScrollY } from "./hooks/useScrollY";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionFetchTrendingListAPI } from "./redux/actions/moviesAction";

function App() {
  const [scollY] = useScrollY();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchTrendingListAPI());
  }, [dispatch]);
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
    </div>
  );
}

export default App;

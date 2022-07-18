import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { scroll, randomizeColors } from "./reducers/appReducer";
import { useEffect } from "react";

function App() {
  const colors = useSelector((state) => state.appReducer.colors);
  const dispatch = useDispatch();

  const handleScroll = (e) => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const scrollLocation = document.getElementById("App").scrollTop;
    const pos = vh - scrollLocation;
    document.getElementById("float").style.top = `${pos}px`;
    dispatch(scroll(scrollLocation));
  };

  const generateRandomColors = () => Math.floor(Math.random() * 16777215).toString(16);

  const handleMiddleMouseClick = (e) => {
    if (e.which === 1) {
      e.preventDefault();
      const obj = [generateRandomColors(), generateRandomColors(), generateRandomColors()];
      dispatch(randomizeColors(obj));
    }
  };

  useEffect(() => {
    const appElement = document.getElementById("App");
    appElement.addEventListener("click", handleMiddleMouseClick);
    return () => {
      appElement.removeEventListener("click", handleMiddleMouseClick);
    };
  });

  return (
    <div className="App container" id="App" onScroll={handleScroll}>
      <div className="background top" style={{ backgroundColor: "#" + colors[0] }}></div>
      <div className="background bottom" style={{ backgroundColor: "#" + colors[1] }}></div>
      <div className="foreground" id="float" style={{ backgroundColor: "#" + colors[2] }}></div>
    </div>
  );
}

export default App;

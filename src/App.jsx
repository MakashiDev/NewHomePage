import "./App.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <div className="Maindiv">
      <SimpleBar forceVisible="y" autoHide={false}>
        <div className="top">
          <button className="leftButton">
            <a href="https://weather.makashi.dev/">Weather App</a>
          </button>
          <button className="rightButton">
            <a href="https://christmas.makashi.dev/">Christmas Countdown</a>
          </button>
        </div>
        <div className="bottom">
          <footer>
            <p>© Makashi</p>
          </footer>
        </div>
      </SimpleBar>
    </div>
  );
}

export default App;

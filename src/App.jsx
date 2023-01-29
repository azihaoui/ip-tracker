import "./App.css";
import Images from "./assets/images/pattern-bg.png";
import Arrow from "./assets/images/icon-arrow.svg";

function App() {
  return (
    <div className="App">
      <div className="pattern">
        <h2 className="ip-address">IP Address Tracker</h2>
        <div className="input">
          <input className="input-ip-address" type="text" name="" id="" />
          <div className="input-button">
            <img className="arrow" src={Arrow} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="box-section">
            <h5>IP ADDRESS</h5>
            <p>192.212.174.101</p>
          </div>
          <div className="divider"></div>

          <div className="box-section">
            <h5>LOCATION</h5>
            <p>Brooklyn, NY 10001</p>
          </div>
          <div className="divider"></div>

          <div className="box-section">
            <h5>TIMEZONE</h5>
            <p>UTC -05:00</p>
          </div>
          <div className="divider"></div>

          <div className="box-section">
            <h5>ISP</h5>
            <p>SpaceX Starlink</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

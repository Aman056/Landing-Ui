import Nav from "./Components/Nav";
import img from './img//casual-life-3d-girl-and-boy-sitting-with-laptop-1.png'
import buttonimg from './img/Screenshot 2024-05-02 222902.png'
import potHolder from './img/pot-holder.png'
import Icons from "./Components/Icons";
import Course from "./Components/Course";
function App() {
  return (
    <>
      <div className="container-main">
        <Nav />
        <div id="container-parent">
          <Icons />
          <div className="child">
            <p><span className="offTag">50% OFF</span> <span className="Learn-from-today">Learn from Today</span></p>
            <div className="main-title">
              <span className="main-title"> The best way for your learning <img src={potHolder} height={55} style={{ margin: '0px', filter: "drop-shadow(5px 5px 5px #222)" }} /></span><br />
            </div>
            <div className="description">
              <span >There are many variants of passengers of lorem available, but the <br /> majority have suffered</span>
            </div>
            <div className="button-div">
              <button className="Expo">Explore Courses <span>&#x2192;</span> </button>
              <button className="WatchDemo"><img src={buttonimg} height={40} style={{ marginRight: '7px' }} alt="hello this is button" /> Watch Demo</button>
            </div>

          </div>
          <div className="child">
            <img src={img} height={500} style={{ marginRight: '-40px' }} />
          </div>
        </div>
        <Course />
      </div>

    </>
  );
}

export default App;

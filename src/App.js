import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <TopBar />
        <Home />
      </div>
    </div>
  );
}

export default App;

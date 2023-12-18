import "./App.css";
import HomeContent from "./components/HomeContent";
import NavBar from "./components/NavBar";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <>
      <div id="wrapper">
        <NavBar />

        <SideBar />

        <HomeContent />
      </div>
    </>
  );
}

export default App;

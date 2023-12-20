import HomeContent from "../HomeContent";
import NavBar from "../NavBar";
import { SideBar } from "../SideBar";

const HomePage = () => {
  return (
    <>
      {" "}
      <div id="wrapper">
        <NavBar />
        <SideBar />
        <HomeContent />
      </div>
    </>
  );
};

export default HomePage;

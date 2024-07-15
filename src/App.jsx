import "./App.css";
import HomePage from "./Components/Home Page/HomeBage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideBar from "./Components/Side Bar/SideBar";
// import AboutPage from "./Components/About page/AboutPage";
// import SkillingPage from "./Components/Skilling Page/SkillingPage";
import "@fontsource/playfair";
import "@fontsource/quicksand";
function App() {
  return (
    <>
      <SideBar />
      <HomePage />
    </>
  );
}

export default App;

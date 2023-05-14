import { Route, Routes } from "react-router-dom";
import SpinsHome from "./components/SpinsHome"
import Header from "./components/Header";
import { PopUpContext } from "./contexts/PopUpContext";
import PopUp from "./components/PopUp";
import Announcements from "./components/Announcements";
import { useContext } from "react";
import Footer from "./components/Footer";

const App = () => {
  const { popUp } = useContext(PopUpContext);

  return (
    <>
      {popUp && <PopUp popUp={popUp} />}
      <Announcements />
      <Header />
      <Routes>
        <Route path="/" element={<SpinsHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

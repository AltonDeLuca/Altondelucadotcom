import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavigationBar from "./Components/NavBar/NavigationBar";
import ContactPage from "./Components/ContactPage/ContactPage";
import EducationPage from "./Components/EducationPage/EducationPage";
import ExperiencePage from "./Components/ExperiencePage/ExperiencePage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import LayoutSingleTile from "./Components/Layout/LayoutSingleTile";
import LayoutSimpleContainer from "./Components/Layout/LayoutSimpleContainer";
import AlgosPage from "./Components/AlgosPage/Algos";
import CurrencyPage from "./Components/CurrencyPage/CurrencyPage";

function App() {
  useEffect(() => {
    document.title = "Alton DeLuca";
  }, []);
  return (
    <div className="container">
      <NavigationBar className="App-header" />
      <Routes>
        <Route
          path="/Projects"
          element={<LayoutSimpleContainer content={<ProjectsPage />} />}
        ></Route>
        <Route
          path="/Education"
          element={<LayoutSimpleContainer content={<EducationPage />} />}
        ></Route>
        <Route
          path="/Experience"
          element={<LayoutSingleTile content={<ExperiencePage />} />}
        ></Route>
        <Route
          path="/contact"
          element={<LayoutSingleTile content={<ContactPage />} />}
        ></Route>
        <Route
          path="/Algorithms"
          element={<LayoutSimpleContainer content={<AlgosPage />} />}
        ></Route>
        <Route
          path="/Currency"
          element={<LayoutSimpleContainer content={<CurrencyPage />} />}
        ></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

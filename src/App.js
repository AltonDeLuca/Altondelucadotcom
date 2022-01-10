import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavigationBar from "./Components/NavBar/NavigationBar";
import ContactPage from "./Components/ContactPage/ContactPage";
import EducationPage from "./Components/EducationPage/EducationPage";
import ExperiencePage from "./Components/ExperiencePage/ExperiencePage";
import Layout from "./Components/Layout/Layout";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="container">
      <NavigationBar className="App-header" />
      <Routes>
        <Route
          path="/Projects"
          element={<Layout content={<ProjectsPage />} />}
        ></Route>
        <Route
          path="/Education"
          element={<Layout content={<EducationPage />} />}
        ></Route>
        <Route
          path="/Experience"
          element={<Layout content={<ExperiencePage />} />}
        ></Route>
        <Route
          path="/contact"
          element={<Layout content={<ContactPage />} />}
        ></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

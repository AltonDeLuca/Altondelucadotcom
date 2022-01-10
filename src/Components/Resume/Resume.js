import EducationPage from "../EducationPage/EducationPage";
import ExperiencePage from "../ExperiencePage/ExperiencePage";
import "../HomePage/HomePage.css";

function Resume() {
  return (
    <div>
      <div className="tile">
        <h1 className="title">
          <a href="/Education">Education</a>
        </h1>
        <EducationPage />
      </div>
      <div className="tile">
        <h1 className="title">
          <a href="/Experience">Experience</a>
        </h1>
        <ExperiencePage />
      </div>
    </div>
  );
}

export default Resume;

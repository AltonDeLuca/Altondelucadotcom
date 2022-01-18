import ContactPage from "../ContactPage/ContactPage.js";
import EducationPage from "../EducationPage/EducationPage.js";
import ExperiencePage from "../ExperiencePage/ExperiencePage.js";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="with-sidebar">
      <div>
        <div className="tile">
          <h1 className="title gradient__text">
            <a href="/Experience">Experience</a>
          </h1>
          <ExperiencePage />
        </div>
        <br></br>
        <div className="tile">
          <h1 className="title gradient__text">
            <a href="/Education">Education</a>
          </h1>
          <EducationPage />
        </div>
      </div>

      <div className="contact">
        <div className="tile">
          <h1 className="title alt gradient__text">Contact Me</h1>
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

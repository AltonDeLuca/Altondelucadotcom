import { ProjectsList } from "./ProjectsList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="nobottom">
      <h1 className="title ">MY PROJECTS</h1>
      <ul>
        {ProjectsList.map((item, index) => {
          return (
            <li className="text" key={index}>
              <div className="tile">
                <span className=" subtitle">
                  <a href={item.ghub}>
                    <GitHubIcon fontSize="large" />
                  </a>
                  <h1>{item.title}</h1>

                  <img className="logo" src={item.img} alt={item.imgAlt}></img>
                </span>
                <div className="bullet">
                  {/* {item.Descirption} */}
                  {item.description.map((item2, index2) => {
                    return <div key={index2}>{item2}</div>;
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ProjectsPage;

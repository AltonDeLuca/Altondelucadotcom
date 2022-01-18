import { ProjectsList } from "./ProjectsList";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsPage() {
  return (
    <div>
      <h1 className="title gradient__text">MY PROJECTS</h1>
      <ul>
        {ProjectsList.map((item, index) => {
          return (
            <li className="text" key={index}>
              <div className="tile">
                <span className="gradient__text subtitle">
                  <a href={item.ghub}>
                    <GitHubIcon fontSize="large" />
                  </a>
                  <h1>{item.title}</h1>

                  <img className="logo" src={item.img} alt={item.imgAlt}></img>
                </span>
                <div className="bullet">
                  {/* {item.Descirption} */}
                  {item.description.map((item2, index2) => {
                    return <li key={index2}>{item2}</li>;
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

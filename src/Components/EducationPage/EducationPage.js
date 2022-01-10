import { EducationItems } from "./EducationItems";
import "./EducationPage.css";

function EducationPage() {
  return (
    <ul>
      {EducationItems.map((item, index) => {
        return (
          <li key={index}>
            <span className="subtitle">
              <h1>{item.Title}</h1>
              <img className="logo" src={item.img} alt={item.imgAlt}></img>
            </span>
            <p>{item.Descirption}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default EducationPage;

import { EducationItems } from "./EducationItems";
import "./EducationPage.css";

function EducationPage() {
  return (
    <div>
      <ul>
        {EducationItems.map((item, index) => {
          return (
            <li key={index}>
              <span className="subtitle">
                <img className="logo" src={item.img} alt={item.imgAlt} />
                <h1>{item.Title}</h1>
              </span>
              <p className="text">
                {item.Descirption.map((item2, index2) => {
                  return <li key={index2}>{item2}</li>;
                })}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default EducationPage;

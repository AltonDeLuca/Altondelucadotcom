import { ExperienceItems } from "./ExperienceItems.js";

function ExperiencePage() {
  return (
    <div>
      <ul>
        {ExperienceItems.map((item, index) => {
          return (
            <li key={index}>
              <span className="subtitle">
                <h1>{item.Title}</h1>
                <img className="logo" src={item.img} alt={item.imgAlt}></img>
              </span>
              <div className="bullet">
                {/* {item.Descirption} */}
                {item.Descirption.map((item2, index2) => {
                  return <li key={index2}>{item2}</li>;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ExperiencePage;

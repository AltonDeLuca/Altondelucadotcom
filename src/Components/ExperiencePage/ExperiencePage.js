import { ExperienceItems } from "./ExperienceItems.js";

function ExperiencePage() {
  return (
    <div>
      <ul>
        {ExperienceItems.map((item, index) => {
          return (
            <li key={index}>
              <span className="subtitle">
                <img className="logo" src={item.img} alt={item.imgAlt} />
                <h1 className="gradient__text">{item.Title}</h1>
              </span>
              <div className="bullet">
                {/* {item.Descirption} */}
                {item.Description.map((item2, index2) => {
                  return (
                    <li className="text" key={index2}>
                      {item2}
                    </li>
                  );
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

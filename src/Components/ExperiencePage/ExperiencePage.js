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
                <h1 className="">{item.Title}</h1>
              </span>
              <div className="bullet">
                {/* {item.Descirption} */}
                {item.Description.map((item2, index2) => {
                  return (
                    <div className="text" key={index2}>
                      {item2}
                    </div>
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

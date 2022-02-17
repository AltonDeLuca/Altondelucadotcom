import Dropdown from "react-bootstrap/Dropdown";

function CustomToggle(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={props.className}
        title={props.title}
        id={props.id}
      >
        Projects
        <Dropdown.Menu>
          {props.data.map((item, i) => {
            return (
              <Dropdown.Item
                key={i}
                eventKey={item}
                className="btn-dd"
                onClick={() => props.handleSelect({ item })}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown.Toggle>
    </Dropdown>
  );
}

export default CustomToggle;

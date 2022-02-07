import { DropdownButton } from "react-bootstrap";

import Dropdown from "react-bootstrap/Dropdown";

function ButtonWithDropDown(props) {
  // const [open, setOpen] = useState(false);
  // const toggleOpen = () => {
  //   setOpen(!open);
  //   console.log(open);
  // };

  return (
    <DropdownButton
      variant={props.variant}
      className={props.className}
      title={props.content}
      onSelect={props.handleSelect}
      id={props.id}
    >
      {props.data.map((item, i) => {
        return (
          <Dropdown.Item key={i} eventKey={item} className="btn-dd">
            {props.data[i]}
          </Dropdown.Item>
        );
      })}
      {/* <Dropdown.Item eventKey="Bubble" as="button" className="btn-dd">
        Bubble Sort
      </Dropdown.Item>
      <Dropdown.Item eventKey="Merge" as="button" className="btn-dd">
        Merge Sort
      </Dropdown.Item> */}
    </DropdownButton>
  );
}

export default ButtonWithDropDown;

import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  item: string[];
  heading: string;
  onSelectedItem: (item:string) => void;
}

function ListGroup({item, heading, onSelectedItem}: Props) {
  //  const handleClick1 = (event:string) => console.log(event);
  //hook - allow us to tap into build-in features in react, using this hook we can tell to react this compnent can have data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem (item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

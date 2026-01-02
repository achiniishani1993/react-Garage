import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import Button from "./components/Button";
import { useState } from "react";


const handleSelectedItem = (item: string) => {
  console.log(item);
};
function App() {
  const [alertVisible, setAlertVisibility]=useState(false);
  let item = [
    "New York",
    "Sri Lanka",
    "Singapore",
    "Sweden",
    "North Korea",
    "Norway",
  ];
  return (
    <div>
      <Message />
      <ListGroup
        item={item}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      {alertVisible &&  <Alert onClose={() => setAlertVisibility(false)}>
        World Famous <span>Cities</span>
      </Alert>}
      <Button onClick={() => setAlertVisibility (true)}>Click me</Button>
    </div>
  );
}

export default App;

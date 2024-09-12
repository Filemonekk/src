import "./App.css";

import { Button, Text } from "./ui";

function App() {
  return (
    <>
      <Text>Hello Amigos!</Text>
      <Button label="Click me!" onClick={() => alert("Hey!")} disabled={true} />
    </>
  );
}

export default App;

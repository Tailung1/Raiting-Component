import "./index.css";
import "./App.css";
import { useState } from "react";
import Raiting from "./components/Raiting";
import Result from "./components/Result";

function App() {
  const [selectedRaiting, setSelectedRaiting] = useState<
    undefined | number
  >(undefined);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  console.log(selectedRaiting);
  return (
    <>
      {isSelected ? (
        <Result selectedRaiting={selectedRaiting} />
      ) : (
        <Raiting
          selectedRaiting={selectedRaiting}
          setSelectedRaiting={setSelectedRaiting}
          setIsSelected={setIsSelected}
        />
      )}
    </>
  );
}

export default App;

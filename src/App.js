import LeftSid from "./components/infos";
import RightCharts from "./components/RightCharts";
import { useState } from "react";
import Phone from "./Classes/Phone";
// add name to inputs V.I
function App() {
  const [activePhone, setActivePhone] = useState([1]);
  const [phones, setPhones] = useState([
    new Phone(0, "Nokia", "6600", 2008, 16, [true, false, false], 4, "black"),
    new Phone(1, "Samsung", "s6", 2019, 32, [(true, true, true)], 5, "white"),
    new Phone(2, "Apple", "iphone4", 2008, 64, [true, true, false], 4, "black"),
    new Phone(3, "Sony", "Z2", 2009, 128, [true, false, true], 6, "gold"),
  ]);
  return (
    <div className="App container">
      {/* <h1>Hi From REACT JS</h1> */}
      <LeftSid
        classNam="left-side"
        phones={phones}
        setPhones={setPhones}
        activePhone={activePhone}
        setActivePhone={setActivePhone}
      />
      <RightCharts
        classNam="right-side"
        phones={phones}
        setPhones={setPhones}
      />
    </div>
  );
}

export default App;

import LeftSid from "./components/infos";
import RightCharts from "./components/RightCharts";
import { useState } from "react";
import Phone from "./Classes/Phone";
// add name to inputs V.I
function App() {
  const [phones, setPhones] = useState([
    new Phone("Nokia", "6600", 2005, [true, false, false], 4, "black"),
    new Phone("Samsung", "s6", 2019, [true, true, true], 5, "white"),
    new Phone("Apple", "iphone4", 2008, [true, true, false], 4, "black"),
    new Phone("Sony", "Z2", 2009, [true, false, true], 6, "gold"),
  ]);
  return (
    <div className="App container">
      {/* <h1>Hi From REACT JS</h1> */}
      <LeftSid classNam="left-side" phones={phones} setPhones={setPhones} />
      <RightCharts
        classNam="right-side"
        phones={phones}
        setPhones={setPhones}
      />
    </div>
  );
}

export default App;

import LeftSid from "./components/infos";
import RightCharts from "./components/RightCharts";
import { useState } from "react";
import Phone from "./Classes/Phone";
// add name to inputs V.I
function App({ phones, setPhones, activePhone, setActivePhone }) {
  return (
    <div className="App container">
      {/* <h1>Hi From REACT JS</h1> */}
      <Phone />
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

import LeftSid from "./components/infos";
import RightCharts from "./components/RightCharts";
// add name to inputs V.I
function App() {
  return (
    <div className="App container">
      {/* <h1>Hi From REACT JS</h1> */}
      <LeftSid classNam="left-side" />
      <RightCharts classNam="right-side" />
    </div>
  );
}

export default App;

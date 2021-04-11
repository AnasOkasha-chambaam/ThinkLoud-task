import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import React, { useEffect, useState } from "react";
import Phone from "./Classes/Phone";

export default function AppRouter() {
  const [activePhone, setActivePhone] = useState([1]);
  const [phones, setPhones] = useState([
    new Phone(0, "nokia", "6600", 2008, 16, [true, false, false], 4, "black"),
    new Phone(1, "samsung", "s6", 2019, 32, [(true, true, true)], 5, "white"),
    new Phone(2, "sony", "Z2", 2009, 128, [true, false, true], 6, "gold"),
    new Phone(3, "sony", "Z3", 2002, 32, [true, false, true], 6, "white"),
    new Phone(4, "apple", "iphone4", 2008, 64, [true, true, false], 4, "black"),
  ]);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <App
              phones={phones}
              setPhones={setPhones}
              activePhone={activePhone}
              setActivePhone={setActivePhone}
            />
          )}
        />
        <Route
          path="/add-new-phone"
          exact
          component={() => (
            <Add
              phones={phones}
              setPhones={setPhones}
              activePhone={activePhone}
              setActivePhone={setActivePhone}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
// export default class AppRouter extends React.Component {
//   componentDidMount() {
//     //  for donut chart

//     let rotationValue = 0;
//     document.querySelectorAll(".a-strib").forEach((one) => {
//       let ttlL = one.getTotalLength();
//       one.style.strokeDasharray = ttlL;
//       one.style.strokeDashoffset =
//         (1 -
//           +one.getAttribute("dataamount") /
//             one.parentElement.getAttribute("datattl")) *
//         ttlL;
//       one.style.transformOrigin = "center";
//       one.style.transform = `rotate(${rotationValue}deg)`;
//       rotationValue +=
//         (+one.getAttribute("dataamount") /
//           one.parentElement.getAttribute("datattl")) *
//         360;
//       console.log(
//         +one.getAttribute("dataamount") /
//           one.parentElement.getAttribute("datattl")
//       );
//     });
//   }
//   render() {

//     return (
//       <Router>
//         <Switch>
//           <Route path="/" exact component={App} />
//           <Route path="/add-new-phone" exact component={Add} />
//         </Switch>
//       </Router>
//     );
//   }
// }

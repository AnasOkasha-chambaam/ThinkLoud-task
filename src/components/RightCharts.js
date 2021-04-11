import { Fragment } from "react";
const RightCharts = ({ classNam, phones, setPhones }) => {
  let years = {},
    totalCo = phones.length;
  phones.forEach((one) => {
    if (!years[one.year]) {
      years[one.year] = 0;
    }
    years[one.year]++;
  });
  let brands = {};
  phones.forEach((one) => {
    if (!brands[one.brand]) {
      brands[one.brand] = 0;
    }
    brands[one.brand]++;
  });
  return (
    <div className={classNam}>
      <div className="bar-chart-container">
        <ul className="bar-chart">
          <span className="after">Year</span>
          <span className="before">Number of Mobiles</span>
          {Object.keys(years).map((one) => {
            return (
              <li
                key={one}
                className="bar"
                data_number={years[one]}
                style={{ width: (years[one] / totalCo) * 100 + "%" }}
              >
                <span className="after">{years[one]}</span>
                <span className="before">{one}</span>
              </li>
            );
          })}
          {/*
          <li className="bar" data_number={2}>
            <span className="after">2</span>
            <span className="before">2000</span>
          </li>
          <li className="bar" data_number={3}>
            <span className="after">3</span>
            <span className="before">2012</span>
          </li> */}
        </ul>
      </div>
      <div className="circle-chart-container">
        <svg width="240px" height="240px" datattl={totalCo}>
          {/* <circle cx="400px" cy="400px" r="350px" fill="black" /> */}
          {Object.keys(brands).map((oneF, ind) => {
            return (
              <circle
                key={oneF}
                dataamount={brands[oneF]}
                className={"a-strib " + oneF}
                cx="120px"
                cy="120px"
                r="50px"
                fill="transparent"
                stroke={
                  "rgb(" +
                  (ind / Object.keys(brands).length) * 0 +
                  "," +
                  (ind / Object.keys(brands).length) * 255 +
                  "," +
                  (ind / Object.keys(brands).length) * 0 +
                  ")"
                }
                strokeWidth="100px"
                opacity="1"
              >
                <text className="after">{oneF}</text>
              </circle>
            );
          })}

          {/* <circle
            className="a-strib"
            cx="120px"
            cy="120px"
            r="50px"
            fill="transparent"
            stroke="red"
            strokeWidth="100px"
            opacity="0.5"
          />
          <circle
            className="a-strib"
            cx="120px"
            cy="120px"
            r="50px"
            fill="transparent"
            stroke="green"
            strokeWidth="100px"
            strokeDasharray="10px"
          /> */}
        </svg>
        <div className="char-cheet-sheet">
          <ul>
            {Object.keys(brands).map((oneF, ind) => {
              return (
                <li style={{ marginBottom: "9px" }}>
                  <span
                    style={{
                      backgroundColor: `rgb(${
                        (ind / Object.keys(brands).length) * 0
                      },${(ind / Object.keys(brands).length) * 255},${
                        (ind / Object.keys(brands).length) * 0
                      })`,
                      width: "3px",
                      height: "3px",
                      padding: "3px",
                      marginLeft: "2px",
                    }}
                  ></span>
                  {oneF}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightCharts;

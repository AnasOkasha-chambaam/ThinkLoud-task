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
                className="bar"
                data_number={years[one]}
                style={{ width: (years[one] / totalCo) * 100 + "%" }}
              >
                <span className="after">{years[one]}</span>
                <span className="before">one</span>
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
        <svg width="240px" height="240px">
          {/* <circle cx="400px" cy="400px" r="350px" fill="black" /> */}

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
      </div>
    </div>
  );
};

export default RightCharts;

const PhonesList = ({
  classNam,
  phones,
  setPhones,
  setActivePhone,
  activePhone,
}) => {
  return (
    <div className={classNam}>
      <span className="record">
        <span className="grid-component">
          <i className="fas fa-sort-down"></i>
          Brand
        </span>
        <span className="grid-component">
          <i className="fas fa-sort-down"></i>
          Model
        </span>
        <span className="grid-component">
          <i className="fas fa-sort-down"></i>
          Year
        </span>
      </span>
      {phones.map((one) => {
        return (
          <span
            onClick={function (e) {
              // for Phone List
              if (document.querySelector(".record.active")) {
                document
                  .querySelector(".record.active")
                  .classList.remove("active");
              }
              setActivePhone([one.id + 1]);
              e.target.parentElement.classList.add("active");
            }}
            className={
              "record " + (one.id === activePhone[0] - 1 ? "active" : " ")
            }
            key={"info-" + one.id}
            id={"id-info-" + one.id}
          >
            <span
              className={"grid-component phone-" + one.id}
              key={"brand-" + one.id}
            >
              {one.brand}
            </span>
            <span
              className={"grid-component phone-" + one.id}
              key={"model-" + one.id}
            >
              {one.model}
            </span>
            <span
              className={"grid-component phone-" + one.id}
              key={"year-" + one.id}
            >
              {one.year}
            </span>
          </span>
        );
      })}
      {/* <span className="grid-component">Nokia</span>
      <span className="grid-component">6600</span>
      <span className="grid-component">2005</span> */}
    </div>
  );
};

export default PhonesList;

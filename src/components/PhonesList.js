const PhonesList = ({ classNam }) => {
  return (
    <div className={classNam}>
      <span className="grid-component">
        <i class="fas fa-sort-down"></i>
        Brand
      </span>
      <span className="grid-component">
        <i class="fas fa-sort-down"></i>
        Model
      </span>
      <span className="grid-component">
        <i class="fas fa-sort-down"></i>
        Year
      </span>
      <span className="grid-component">Nokia</span>
      <span className="grid-component">6600</span>
      <span className="grid-component">2005</span>
    </div>
  );
};

export default PhonesList;

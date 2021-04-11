import { Link } from "react-router-dom";
const SearchForm = (props) => {
  const searchFormFunc = (e) => {
    e.preventDefault();
    let selectedBrand = document.getElementById("select-brand"),
      modelName = document.getElementById("model-name");
    let searchedPhone = [];
    props.phones.forEach((one) => {
      if (
        one.brand.toUpperCase() === selectedBrand.value.toUpperCase() &&
        one.model.toUpperCase().indexOf(`${modelName.value.toUpperCase()}`) > -1
      ) {
        searchedPhone.push(one);
      }
    });
    document.querySelectorAll(".record:not(:first-of-type)").forEach((elm) => {
      elm.style.display = "none";
    });
    searchedPhone.forEach((one) => {
      document.querySelector(`#id-info-${one.id}`).style.display = "grid";
    });
    if (document.querySelector(".record.active")) {
      document.querySelector(".record.active").classList.remove("active");
      document.querySelector("#phone-data").innerHTML = "";
    }
  };
  return (
    <div className={props.classNam}>
      <h2>Mobile Shop Application</h2>
      <Link id="add-new-mob" to="/add-new-phone">
        Add New mobile
      </Link>
      <form onSubmit={searchFormFunc}>
        <label>Model</label>
        <input type="text" id="model-name" />
        <label>brand</label>
        <select defaultValue="samsung" id="select-brand">
          {/* add it dynamically */}
          <option value="nokia">Nokia</option>
          <option value="samsung">Samsung</option>
          <option value="apple">Apple</option>
          <option value="sony">Sony</option>
          <option value="lg">LG</option>
        </select>
        <span>
          <input type="submit" value="search" />
        </span>
      </form>
    </div>
  );
};

export default SearchForm;

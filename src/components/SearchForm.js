import { Link } from "react-router-dom";
const SearchForm = (props) => {
  return (
    <div className={props.classNam}>
      <h2>Mobile Shop Application</h2>
      <Link id="add-new-mob" to="/add-new-phone">
        Add New mobile
      </Link>
      <form>
        <label>Model</label>
        <input type="text" id="model-name" />
        <label>brand</label>
        <select defaultValue="samsung">
          {/* add it dynamically */}
          <option value="nokia">Nokia</option>
          <option value="samsung">Samsung</option>
          <option value="apple">Apple</option>
          <option value="sony">Sony</option>
          <option value="sony">LG</option>
        </select>
        <span>
          <input type="submit" value="search" />
        </span>
      </form>
    </div>
  );
};

export default SearchForm;

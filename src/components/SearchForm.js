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
        <select>
          {/* add it dynamically */}
          <option value="nokia">Nokia</option>
          <option value="samsung" selected>
            Samsung
          </option>
          <option value="apple">Apple</option>
          <option value="sony">Sony</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchForm;

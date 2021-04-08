import AddLeftSide from "./components/AddLeftSide";
import AddRightSide from "./components/AddRightSide";
import { Link } from "react-router-dom";
function addNewPhone() {
  return (
    <div className="container">
      <span className="the-header">Add Mobile</span>
      <form>
        <AddLeftSide />
        <AddRightSide />
        <Link to="/">back</Link>
        <input type="submit" value="save" />
      </form>
    </div>
  );
}

export default addNewPhone;

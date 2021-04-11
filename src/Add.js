import AddLeftSide from "./components/AddLeftSide";
import AddRightSide from "./components/AddRightSide";
import { Link } from "react-router-dom";
import Phone from "./Classes/Phone";
function addNewPhone({ phones, setPhones }) {
  const addNewPhoneFunc = (e) => {
    e.preventDefault();
    setPhones([
      ...phones,
      new Phone(
        phones[phones.length - 1].id + 1,
        document.querySelector("#brand").value,
        document.querySelector("#model").value,
        document.querySelector("#year").value,
        document.querySelector("#memory").value,
        [
          document.querySelector("#duos").checked ? true : false,
          document.querySelector("#nfc").checked ? true : false,
          document.querySelector("#_4g").checked ? true : false,
        ],
        document.querySelectorAll("input[name='the-screen']").forEach((one) => {
          if (one.checked) {
            return one.value;
          }
        }),
        document.querySelectorAll("input[name='the-color']").forEach((one) => {
          if (one.checked) {
            return one.value;
          }
        })
      ),
    ]);
    document.querySelector("#back-from-add").click();
    console.log(phones);
  };

  return (
    <div className="add-page">
      <span className="the-header">Add Mobile</span>
      <form className="container" id="add-form" onSubmit={addNewPhoneFunc}>
        <AddLeftSide />
        <AddRightSide />

        <span className="buttons">
          <Link to="/" id="back-from-add">
            back
          </Link>
          <input type="submit" value="save" />
        </span>
      </form>
    </div>
  );
}

export default addNewPhone;

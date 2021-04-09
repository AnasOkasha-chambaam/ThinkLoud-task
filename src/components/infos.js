import SearchForm from "./SearchForm";
import PhonesList from "./PhonesList";

const LeftSide = (props) => {
  return (
    <div className={props.classNam}>
      <h1>Mobile Shop Application</h1>
      <SearchForm
        classNam="search-form"
        phones={props.phones}
        setPhones={props.setPhones}
      />
      <PhonesList
        classNam="phone-list"
        phones={props.phones}
        setPhones={props.setPhones}
      />
    </div>
  );
};

export default LeftSide;

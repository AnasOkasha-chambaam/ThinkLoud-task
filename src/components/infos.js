import SearchForm from "./SearchForm";
import PhonesList from "./PhonesList";
import PhoneData from "./PhoneData";

const LeftSide = (props) => {
  return (
    <div className={props.classNam}>
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
      <PhoneData
        setActivePhone={props.setActivePhone}
        activePhone={props.activePhone}
        phones={props.phones}
        setPhones={props.setPhones}
      />
    </div>
  );
};

export default LeftSide;

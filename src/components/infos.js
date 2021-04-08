import SearchForm from "./SearchForm";
import PhonesList from "./PhonesList";

const LeftSide = (props) => {
  return (
    <div className={props.classNam}>
      <h1>This is from left side</h1>
      <SearchForm classNam="search-form" />
      <PhonesList classNam="phone-list" />
    </div>
  );
};

export default LeftSide;

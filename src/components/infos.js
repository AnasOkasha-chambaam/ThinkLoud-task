import SearchForm from "./SearchForm";

const LeftSide = (props) => {
  return (
    <div className={props.classNam}>
      <h1>This is from left side</h1>
      <SearchForm classNam="search-form" />
    </div>
  );
};

export default LeftSide;

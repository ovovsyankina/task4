import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilm } from "../../redux/reducer/filter/actions";
import SearchFilter from "./SearchFilter";

const SearchFilterContainer = () => {
  const [currentSearchText, setCurrentSearchText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchFilm(currentSearchText));
  }, [dispatch, currentSearchText]);
  const handleSearchFilm = useCallback(() => {
    console.log("search");
    dispatch(searchFilm(currentSearchText));
  }, [dispatch, currentSearchText]);

  const handleChangeFilter = (e) => {
    setCurrentSearchText(e.target.value);
  };

  return (
    <SearchFilter
      currentSearch={currentSearchText}
      setCurrentSearch={setCurrentSearchText}
      onSearchFilm={handleSearchFilm}
      onChangeFilter={handleChangeFilter}
    />
  );
};
export default SearchFilterContainer;

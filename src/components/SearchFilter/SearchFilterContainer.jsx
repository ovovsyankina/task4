import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchFilm } from "../../redux/reducer/filter/actions";
import { filterDataSelector } from "../../redux/selectors";
import SearchFilter from "./SearchFilter";

const SearchFilterContainer = ({ filteredFilm }) => {
  const [currentSearchText, setCurrentSearchText] = useState("");
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(searchFilm(currentSearchText));
  // }, [dispatch, currentSearchText]);
  const handleSearchFilm = useCallback(() => {
    dispatch(searchFilm(currentSearchText));
    navigate(`/films/?search=${currentSearchText}`);
  }, [dispatch, currentSearchText]);

  const handleChangeFilter = (e) => {
    setCurrentSearchText(e.target.value);
  };

  const handleClearSearchInput = useCallback(() => {
    setCurrentSearchText("");
    dispatch(searchFilm(""));

    navigate(`/films`);
  }, [dispatch, currentSearchText]);
  return (
    <SearchFilter
      currentSearch={currentSearchText}
      setCurrentSearch={setCurrentSearchText}
      onSearchFilm={handleSearchFilm}
      onChangeFilter={handleChangeFilter}
      filter={filter}
      filteredFilm={filteredFilm}
      onClearSearchInput={handleClearSearchInput}
    />
  );
};
export default SearchFilterContainer;

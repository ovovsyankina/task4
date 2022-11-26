import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { searchFilm } from "../../redux/reducer/filter/actions";
import { filterDataSelector } from "../../redux/selectors";
import SearchFilter from "./SearchFilter";
import { array } from "prop-types";

const SearchFilterContainer = ({ filteredFilm }) => {
  const [currentSearchText, setCurrentSearchText] = useState("");
  const searchValue = useSelector(filterDataSelector);

  const filter = useQuery().get("search");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("FILTER >", filter);
  useEffect(() => {
    if (filter && filter !== "") {
      dispatch(searchFilm(filter));
    }
  }, [dispatch, filter]);
  const handleSearchFilm = useCallback(() => {
    dispatch(searchFilm(currentSearchText));
  }, [dispatch, currentSearchText]);

  const handleChangeFilter = (e) => {
    setCurrentSearchText(e.target.value);
  };

  const handleClearSearchInput = useCallback(() => {
    setCurrentSearchText("");
    dispatch(searchFilm(""));

    navigate(`/films`);
  }, [dispatch, navigate]);
  return (
    <SearchFilter
      currentSearch={currentSearchText}
      setCurrentSearch={setCurrentSearchText}
      onSearchFilm={handleSearchFilm}
      onChangeFilter={handleChangeFilter}
      searchValue={searchValue}
      filteredFilm={filteredFilm}
      onClearSearchInput={handleClearSearchInput}
    />
  );
};

SearchFilterContainer.propTypes = {
  filteredFilm: array,
};

export default SearchFilterContainer;

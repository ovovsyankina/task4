import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { searchFilm } from "../../redux/reducer/filter/actions";
import { filterDataSelector } from "../../redux/selectors";
import SearchFilter from "./SearchFilter";
import { array } from "prop-types";

const SearchFilterContainer = ({ page }) => {
  const searchValue = useSelector(filterDataSelector);
  const filter = useQuery().get("search");
  const [currentSearchText, setCurrentSearchText] = useState(filter || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchFilm = useCallback(() => {
    dispatch(searchFilm(currentSearchText));
  }, [dispatch, currentSearchText]);

  const handleChangeFilter = (e) => {
    setCurrentSearchText(e.target.value);
  };

  const handleClearSearchInput = useCallback(() => {
    setCurrentSearchText("");
    dispatch(searchFilm(""));

    navigate(-1);
  }, [dispatch, navigate]);

  return (
    <SearchFilter
      currentSearch={currentSearchText}
      setCurrentSearch={setCurrentSearchText}
      onSearchFilm={handleSearchFilm}
      onChangeFilter={handleChangeFilter}
      searchValue={searchValue}
      onClearSearchInput={handleClearSearchInput}
      page={page}
    />
  );
};

SearchFilterContainer.propTypes = {
  filteredFilm: array,
};

export default SearchFilterContainer;

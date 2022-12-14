import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { searchFilm } from "../../redux/reducer/filter/actions";
import { dataSelector, favoriteDataSelector } from "../../redux/selectors";
import SearchFilter from "./SearchFilter";
import { string } from "prop-types";

const SearchFilterContainer = ({ page }) => {
  const data = useSelector(dataSelector);
  const favoriteData = useSelector(favoriteDataSelector);
  const filter = useQuery().get("search");
  const [currentSearchText, setCurrentSearchText] = useState(filter || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (filter && filter.length !== 0) {
      dispatch(searchFilm(filter));
    }
  }, [dispatch, filter, currentSearchText]);

  const handleSearchFilm = useCallback(() => {
    if (currentSearchText.trim().length > 0) {
      navigate(
        page === "favorite"
          ? `/films/favorite?search=${currentSearchText}`
          : `/films?search=${currentSearchText}`
      );
      dispatch(searchFilm(currentSearchText));
    } else {
      setCurrentSearchText("");
      dispatch(searchFilm(filter));
    }
  }, [dispatch, navigate, page, currentSearchText, filter]);

  const handleSearchFilmEnter = (e) =>
    e.key === "Enter" ? handleSearchFilm() : "";

  const handleChangeFilter = (e) => {
    setCurrentSearchText(e.target.value);
  };

  const handleClearSearchInput = useCallback(() => {
    navigate(page === "favorite" ? `/films/favorite` : `/films`);
    setCurrentSearchText("");
    dispatch(searchFilm(""));
  }, [dispatch, navigate, page]);

  const handleChangeInput = (e) => setCurrentSearchText(e.target.value);

  return (
    <SearchFilter
      currentSearch={currentSearchText}
      setCurrentSearch={setCurrentSearchText}
      onSearchFilm={handleSearchFilm}
      onChangeFilter={handleChangeFilter}
      filter={filter}
      onClearSearchInput={handleClearSearchInput}
      page={page}
      data={data}
      favoriteData={favoriteData}
      onSearchFilmEnter={handleSearchFilmEnter}
      onChangeInput={handleChangeInput}
    />
  );
};

SearchFilterContainer.propTypes = {
  page: string,
};

export default SearchFilterContainer;

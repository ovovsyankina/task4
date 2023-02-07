import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { searchFilm } from "../../redux/reducer/filter/actions";
import {
  currentDataSelector,
  dataSelector,
  favoriteDataSelector,
} from "../../redux/selectors";
import SearchBar from "./SearchBar";

const SearchBarContainer = () => {
  const data = useSelector(dataSelector);
  const favoriteData = useSelector(favoriteDataSelector);
  const currentFilm = useSelector(currentDataSelector);
  const location = useLocation();
  const filter = useQuery().get("search");
  const [currentSearchText, setCurrentSearchText] = useState(filter || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      (location.pathname === "/" || location.pathname === "/favorite") &&
      !filter
    ) {
      setCurrentSearchText("");
    }
    if (filter === null) {
      setCurrentSearchText("");
    } else {
      setCurrentSearchText(decodeURIComponent(filter));
    }
  }, [location.pathname, filter]);
  console.log();
  useEffect(() => {
    if (filter && filter.length !== 0) {
      dispatch(searchFilm(decodeURIComponent(filter)));
    } else {
      dispatch(searchFilm(""));
    }
  }, [dispatch, filter]);

  const handleSearchFilm = useCallback(() => {
    if (currentSearchText.trim().length > 0) {
      navigate(
        location.pathname === "/favorite"
          ? `/favorite?search=${encodeURIComponent(currentSearchText)}`
          : `?search=${encodeURIComponent(currentSearchText)}`
      );
      dispatch(searchFilm(encodeURIComponent(currentSearchText)));
    } else {
      setCurrentSearchText("");
    }
  }, [dispatch, navigate, location.pathname, currentSearchText]);

  const handleSearchFilmEnter = (e) =>
    e.key === "Enter" ? handleSearchFilm() : "";

  const handleClearSearchInput = useCallback(() => {
    navigate(location.pathname === "/favorite" ? `/favorite` : `/`);
    setCurrentSearchText("");
    dispatch(searchFilm(""));
  }, [dispatch, navigate, location.pathname]);

  const handleChangeInput = (e) => setCurrentSearchText(e.target.value);

  return (
    <SearchBar
      currentSearch={currentSearchText}
      onSearchFilm={handleSearchFilm}
      filter={filter}
      onClearSearchInput={handleClearSearchInput}
      data={data}
      favoriteData={favoriteData}
      onSearchFilmEnter={handleSearchFilmEnter}
      onChangeInput={handleChangeInput}
      isHomePage={location.pathname === "/"}
      currentFilmView={
        location.pathname === `/${currentFilm.id}` ||
        location.pathname === `/favorite/${currentFilm.id}`
      }
    />
  );
};

export default SearchBarContainer;

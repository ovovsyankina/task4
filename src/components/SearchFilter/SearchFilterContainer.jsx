import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { searchFilm } from "../../redux/reducer/filter/actions";
import { dataSelector, favoriteDataSelector } from "../../redux/selectors";
import SearchFilter from "./SearchFilter";

const SearchFilterContainer = () => {
  const data = useSelector(dataSelector);
  const favoriteData = useSelector(favoriteDataSelector);
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
  }, [location.pathname, filter]);

  useEffect(() => {
    if (filter && filter.length !== 0) {
      dispatch(searchFilm(filter));
    } else {
      dispatch(searchFilm(""));
    }
  }, [dispatch, filter, currentSearchText]);

  const handleSearchFilm = useCallback(() => {
    if (currentSearchText.trim().length > 0) {
      navigate(
        location.pathname === "/favorite"
          ? `/favorite?search=${currentSearchText}`
          : `?search=${currentSearchText}`
      );
      dispatch(searchFilm(currentSearchText));
    } else {
      setCurrentSearchText("");
      dispatch(searchFilm(filter));
    }
  }, [dispatch, navigate, location.pathname, currentSearchText, filter]);

  const handleSearchFilmEnter = (e) =>
    e.key === "Enter" ? handleSearchFilm() : "";

  const handleClearSearchInput = useCallback(() => {
    navigate(location.pathname === "/favorite" ? `/favorite` : `/`);
    setCurrentSearchText("");
    dispatch(searchFilm(""));
  }, [dispatch, navigate, location.pathname]);

  const handleChangeInput = (e) => setCurrentSearchText(e.target.value);

  return (
    <SearchFilter
      currentSearch={currentSearchText}
      onSearchFilm={handleSearchFilm}
      filter={filter}
      onClearSearchInput={handleClearSearchInput}
      data={data}
      favoriteData={favoriteData}
      onSearchFilmEnter={handleSearchFilmEnter}
      onChangeInput={handleChangeInput}
      isHomePage={location.pathname === "/"}
    />
  );
};

export default SearchFilterContainer;

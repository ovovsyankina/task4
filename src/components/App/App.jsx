import FilmListContainer from "../FilmList/FilmListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import ScreenViewingContainer from "../ScreenViewing/ScreenViewingContainer";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/films" element={<FilmListContainer />} exact />
        <Route
          path="/films/?search=:filter"
          element={<SearchFilterContainer />}
          exact
        />
        <Route
          path="/films/:filmId"
          element={<ScreenViewingContainer />}
          exact
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

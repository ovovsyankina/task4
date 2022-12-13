import FilmListContainer from "../FilmList/FilmListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import ScreenViewingContainer from "../ScreenViewing/ScreenViewingContainer";
import Header from "../Header/Header";
import ModalWindowContainer from "../ModalWindow/ModalWindowContainer";
import ModalViewportContainer from "../ModalViewport/ModalViewportContainer";
import FavoritesPageContainer from "../FavoritesPage/FavoritesPageContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
const App = ({
  currentData,
  isModalViewportOpen,
  setModalViewportOpen,
  isModalAddEditOpen,
  modalType,
  onModalAddOpen,
  onModalEditOpen,
  onModalAddEditClose,
  counter,
}) => {
  return (
    <BrowserRouter>
      <Header counter={counter} />
      <Routes>
        <Route
          path="/films"
          element={
            <HomePageContainer
              onModalAddOpen={onModalAddOpen}
              setModalViewportOpen={setModalViewportOpen}
              onModalEditOpen={onModalEditOpen}
            />
          }
          exact
        />
        <Route
          path="/films/favorite"
          element={
            <FavoritesPageContainer
              onModalAddOpen={onModalAddOpen}
              setModalViewportOpen={setModalViewportOpen}
              onModalEditOpen={onModalEditOpen}
            />
          }
          exact
        />
        <Route
          path="/films?search=:filter"
          element={<SearchFilterContainer />}
          exact
        />
        <Route
          path="/films/:filmId"
          element={<ScreenViewingContainer />}
          exact
        />
      </Routes>
      <ModalWindowContainer
        currentData={currentData}
        isModalAddEditOpen={isModalAddEditOpen}
        modalType={modalType}
        onModalAddEditClose={onModalAddEditClose}
      />
      <ModalViewportContainer
        currentData={currentData}
        isModalViewportOpen={isModalViewportOpen}
        setModalViewportOpen={setModalViewportOpen}
      />
    </BrowserRouter>
  );
};
export default App;

import { HashRouter, Routes, Route } from "react-router-dom";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import ScreenViewingContainer from "../ScreenViewing/ScreenViewingContainer";
import ModalWindowContainer from "../ModalWindow/ModalWindowContainer";
import ModalViewportContainer from "../ModalViewport/ModalViewportContainer";
import FavoritesPageContainer from "../FavoritesPage/FavoritesPageContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import { object, func, string, bool } from "prop-types";
import HeaderContainer from "../Header/HeaderContainer";

const App = ({
  currentData,
  isModalViewportOpen,
  setModalViewportOpen,
  isModalAddEditOpen,
  modalType,
  onModalAddOpen,
  onModalEditOpen,
  onModalAddEditClose,
}) => {
  return (
    <HashRouter basename="/">
      <HeaderContainer />
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
    </HashRouter>
  );
};

App.propTypes = {
  currentData: object,
  isModalViewportOpen: bool,
  setModalViewportOpen: func,
  isModalAddEditOpen: bool,
  modalType: string,
  onModalAddOpen: func,
  onModalEditOpen: func,
  onModalAddEditClose: func,
};
export default App;

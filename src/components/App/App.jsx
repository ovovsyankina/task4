import { HashRouter, Routes, Route } from "react-router-dom";
import ScreenViewingContainer from "../ScreenViewing/ScreenViewingContainer";
import QuickViewModalContainer from "../QuickViewModal/QuickViewModalContainer";
import FavoritesPageContainer from "../FavoritesPage/FavoritesPageContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import { object, func, string, bool } from "prop-types";
import HeaderContainer from "../Header/HeaderContainer";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import CreateEditModalContainer from "../CreateEditModal/CreateEditModalContainer";

const App = ({
  currentData,
  isQuickViewOpen,
  setQuickViewOpen,
  isModalAddEditOpen,
  modalType,
  onModalAddOpen,
  onModalEditOpen,
  onModalAddEditClose,
}) => {
  return (
    <HashRouter basename="/">
      <HeaderContainer />
      <SearchBarContainer />
      <Routes>
        <Route
          path="/"
          element={
            <HomePageContainer
              onModalAddOpen={onModalAddOpen}
              setQuickViewOpen={setQuickViewOpen}
              onModalEditOpen={onModalEditOpen}
            />
          }
          exact
        />
        <Route
          path="/favorite"
          element={
            <FavoritesPageContainer
              onModalAddOpen={onModalAddOpen}
              setQuickViewOpen={setQuickViewOpen}
              onModalEditOpen={onModalEditOpen}
            />
          }
          exact
        />
        <Route path="?search=:filter" element={<SearchBarContainer />} exact />
        <Route path="/:filmId" element={<ScreenViewingContainer />} exact />
      </Routes>
      <CreateEditModalContainer
        currentData={currentData}
        isModalAddEditOpen={isModalAddEditOpen}
        modalType={modalType}
        onModalAddEditClose={onModalAddEditClose}
      />
      <QuickViewModalContainer
        currentData={currentData}
        isQuickViewOpen={isQuickViewOpen}
        setQuickViewOpen={setQuickViewOpen}
      />
    </HashRouter>
  );
};

App.propTypes = {
  currentData: object,
  isQuickViewOpen: bool,
  setQuickViewOpen: func,
  isModalAddEditOpen: bool,
  modalType: string,
  onModalAddOpen: func,
  onModalEditOpen: func,
  onModalAddEditClose: func,
};
export default App;

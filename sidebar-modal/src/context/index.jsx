import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        showModal,
        closeSidebar,
        openSidebar,
        closeModal,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

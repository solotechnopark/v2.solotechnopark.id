import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

const intialState = {
  isSwiperNavNext: false,
  isSwiperNavPrev: false,
  isCurrentPage: 1,
  isModal: {
    id: "",
    value: false,
  },
  isReload: false,
  isEdit: false,
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "SET_SWIPER_NAV_NEXT":
      return { ...state, isSwiperNavNext: action.payload };
    case "SET_SWIPER_NAV_PREV":
      return { ...state, isSwiperNavPrev: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, isCurrentPage: action.payload };
    case "SET_MODAL":
      return { ...state, isModal: action.payload };
    case "SET_RELOAD":
      return { ...state, isReload: action.payload };
    case "SET_EDIT":
      return { ...state, isEdit: action.payload };
    default:
      throw new Error();
  }
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const appContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

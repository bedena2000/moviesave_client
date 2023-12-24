import React, { useReducer, createContext, Dispatch } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface AppState {
  modal: boolean;
}

interface ActionType {
  type: string;
}

type AppDispatch = Dispatch<ActionType>;

interface AppContextTypes {
  state: AppState;
  dispatch: AppDispatch;
}

const initialState: AppState = {
  modal: false,
};

const reducer = (state: AppState, action: ActionType): AppState => {
  switch (action.type) {
    case "changeModal":
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export const AppContext = createContext<AppContextTypes | null>(null);

export const AppContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: AppContextTypes = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

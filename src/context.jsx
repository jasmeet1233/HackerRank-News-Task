import React, {useContext, useReducer} from "react";
import { reducer } from "./reducer";


const initialState = {
  news: []
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <AppContext.Provider value = {{...state}}>
      {children}
    </AppContext.Provider>
    )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export {useGlobalContext, AppProvider}
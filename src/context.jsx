import React, {useContext, useReducer} from "react";
import { reducer } from "./reducer";


const initialState = {
  query: '',
  news: [],
  isLoading : true,
  isError: false
}
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

  const getNews = async(queryData) => {
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${queryData}`
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: "FetchSuccess", payload: data.hits });
    } catch (error) {
      dispatch({type: 'FetchFail'})
    }
  }

    const searchHandler = (query) => {
      dispatch({type: 'QueryHandle', payload: query})
      getNews(query)
    }

    return (
    <AppContext.Provider value = {{...state, searchHandler, getNews}}>
      {children}
    </AppContext.Provider>
    )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export {useGlobalContext, AppProvider}
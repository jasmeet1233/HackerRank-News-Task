export const reducer = (state, action) => {
  if (action.type === "QueryHandle") {
    return { ...state, query: action.payload, isLoading: true };
  }
  if (action.type === "FetchSuccess") {
    return { ...state, isLoading: false, news: action.payload };
  }
  if (action.type === "FetchFail") {
    return { ...state, isError: true, isLoading: false };
  }
};

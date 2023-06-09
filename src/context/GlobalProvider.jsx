import { createContext, useReducer } from "react";
import { ADD_TRANSLATION, DELETE_TRANSLATION, reducer } from "./Reducer";
import { PropTypes } from "prop-types";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSLATION,
      payload: id,
    });
  };

  const addTransacttion = (transaction) => {
    dispatch({
      type: ADD_TRANSLATION,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransacttion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
GlobalProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default GlobalProvider;

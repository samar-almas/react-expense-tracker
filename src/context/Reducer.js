export const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRANSLATION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ADD_TRANSLATION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export const DELETE_TRANSLATION = "DELETE_TRANSLATION";
export const ADD_TRANSLATION = "ADD_TRANSLATION";

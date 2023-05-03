import { PropTypes } from "prop-types";

function Transaction({ transaction, deleteTransaction }) {
  return (
    <li className="mb-4 flex items-center justify-between rounded bg-white px-6 py-4 shadow">
      <span className="font-bold">{transaction.text}</span>
      <span className="font-bold text-red-600">-$1000</span>
      <button
        className="delete-button font-bold text-red-600"
        onClick={() => deleteTransaction(transaction.id)}
      >
        Delete
      </button>
    </li>
  );
}
Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};
export default Transaction;

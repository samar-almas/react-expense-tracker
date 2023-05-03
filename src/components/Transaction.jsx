import { PropTypes } from "prop-types";

function Transaction({ transaction, deleteTransaction }) {
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className="mb-4 flex items-center justify-between rounded bg-white px-6 py-4 shadow font-bold">
      <span className="">{transaction.text}</span>
      <span
        className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}
      >
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-button text-red-600 hover:text-red-400"
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

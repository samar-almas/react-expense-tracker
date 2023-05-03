import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce((bal, transaction) => {
    return (bal += transaction.amount);
  }, 0);
  let income = 0,
    expense = 0;

  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }
  });
  return (
    <div className="flex justify-between mb-8">
      <div className="flex-1 text-center">
        <span className="block text-gray-600">Total Income</span>
        <span className="block text-green-600 font-bold text-lg">
          ${income}
        </span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-gray-600">Total Expense</span>
        <span className="block text-red-600 font-bold text-lg">
          -${Math.abs(expense)}
        </span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-gray-600">Total Balance</span>
        <span className="block text-blue-600 font-bold text-lg">
          {balance > 0 ? "" : "-"}${Math.abs(balance)}
        </span>
      </div>
    </div>
  );
}
export default Balance;

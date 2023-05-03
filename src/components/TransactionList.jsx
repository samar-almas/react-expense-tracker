import { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalProvider";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <ul className="transaction-list">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </ul>
  );
}
export default TransactionList;

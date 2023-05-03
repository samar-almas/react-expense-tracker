import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransacttion } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    addTransacttion(newTransaction);

    setAmount("");
    setText("");
  };
  return (
    <form className="mb-8">
      <input
        type="text"
        placeholder="Expense Name"
        className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Add Expense
      </button>
    </form>
  );
}
export default AddTransaction;

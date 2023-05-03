import { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <form className="mb-8">
      <input
        type="text"
        placeholder="Expense Name"
        className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Expense
      </button>
    </form>
  );
}
export default AddTransaction;

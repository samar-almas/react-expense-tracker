function Balance() {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex-1 text-center">
        <span className="block text-gray-600">Total Income</span>
        <span className="block text-green-600 font-bold text-lg">$2000</span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-gray-600">Total Expense</span>
        <span className="block text-red-600 font-bold text-lg">$1200</span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-gray-600">Total Balance</span>
        <span className="block text-blue-600 font-bold text-lg">$800</span>
      </div>
    </div>
  );
}
export default Balance;

import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="container mx-auto p-8 max-w-2xl">
        <Header />
        <Balance />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}
export default App;

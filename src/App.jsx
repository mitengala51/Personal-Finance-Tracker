import { Header } from "./components/Header";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:p-6">
      <div className="flex flex-col gap-3 mx-8">
        <Header />
        <Dashboard />
        <TransactionForm />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;

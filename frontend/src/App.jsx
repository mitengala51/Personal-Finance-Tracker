import { Header } from "./components/Header";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { useContext, useState } from "react";
import { GlobalContext } from "./context/context";

function App() {
  const [open, setOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    edit: false
  })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fetch, setfetch] = useState(false);

  return (
    <GlobalContext.Provider value={{ open, setOpen, fetch, setfetch, handleOpen, handleClose , setEditForm, editForm}}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:p-6">
        <div className="flex flex-col gap-3 mx-8">
          <Header />
          <Dashboard />
          <TransactionForm />
          <TransactionList  />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;

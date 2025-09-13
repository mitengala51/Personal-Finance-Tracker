import { useContext, useState } from "react";
import TransactionItem from "./TransactionItem";
import { useEffect } from "react";
import { fetchTransaction } from "../api";
import { GlobalContext } from "../context/context";

function TransactionList() {

  const [transactions, setTransactions] = useState([])

  const { fetch } = useContext(GlobalContext)

  useEffect(()=>{
      async function fetchData() {
      const response = await fetchTransaction()
      // console.log(response)
      setTransactions(response)
    }

    fetchData()
  }, [fetch])

  return (
    <div className="grid grid-flow-row bg-white rounded-3xl shadow-lg">
      <div className="p-5">
        <h1 className="text-lg font-bold">Recent Transaction</h1>
      </div>

      {transactions.map((transaction, index)=>{
        return <TransactionItem key={index} _id={transaction._id} title={transaction.title} date={transaction.date} amount={transaction.amount} category={transaction.category}/>
      })}

    </div>
  );
}

export default TransactionList;

import { useState } from "react";
import TransactionItem from "./TransactionItem";
import { useEffect } from "react";
import { fetchTransaction } from "../api";

function TransactionList() {

  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
      async function fetchData() {
      const response = await fetchTransaction()
      console.log(response)
      setTransactions(response)
    }

    fetchData()
  }, [])

  return (
    <div className="grid grid-flow-row bg-white rounded-3xl shadow-lg">
      <div className="p-5">
        <h1 className="text-lg font-bold">Recent Transaction</h1>
      </div>

      {transactions.map((transaction)=>{
        return <TransactionItem title={transaction.title} date={transaction.date} amount={transaction.amount}/>
      })}
      {/* <TransactionItem /> */}
    </div>
  );
}

export default TransactionList;

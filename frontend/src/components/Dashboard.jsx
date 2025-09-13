import { TrendingDown, TrendingUp, IndianRupee } from "lucide-react";
import SummaryCards from "./SummaryCards";
import { useContext, useEffect, useState } from "react";
import { Summary } from "../api";
import { GlobalContext } from "../context/context";

export const Dashboard = () => {

  const [summary, setSummary] = useState([])

  const { fetch } = useContext(GlobalContext)

  useEffect(()=>{
    async function fetchSummary() {
      const summary = await Summary()
      console.log(summary)
      setSummary(summary)
    }

    fetchSummary()
  }, [fetch])

  return (
    <div className="grid lg:grid-flow-col gap-3 py-1">
      <SummaryCards title="Total Income" price={`₹${summary.length === 0 ? 0 : summary?.[0]?.totalIncome}`} icon={<TrendingUp color="green"/>} Textcolor="text-green-600" Bgcolor="bg-green-200"/>
      <SummaryCards title="Total Expense" price={`₹${summary.length === 0 ? 0 : summary?.[0]?.totalExpense}`} icon={<TrendingDown color="red"/>} Textcolor="text-red-600" Bgcolor="bg-red-200"/>
      <SummaryCards title="Net Balance" price={`₹${summary.length === 0 ? 0 : summary?.[0]?.netBalance}`} icon={<IndianRupee color="green"/>} Textcolor="text-green-600" Bgcolor="bg-green-200"/>
    </div>
  );
};

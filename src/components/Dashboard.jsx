import { TrendingDown, TrendingUp, IndianRupee } from "lucide-react";
import SummaryCards from "./SummaryCards";

export const Dashboard = () => {
  return (
    <div className="grid lg:grid-flow-col gap-3 py-1">
      <SummaryCards title="Total Income" price="$5000" icon={<TrendingUp color="green"/>} Textcolor="text-green-600" Bgcolor="bg-green-200"/>
      <SummaryCards title="Total Expense" price="$225" icon={<TrendingDown color="red"/>} Textcolor="text-red-600" Bgcolor="bg-red-200"/>
      <SummaryCards title="Net Balance" price="$4775" icon={<IndianRupee color="green"/>} Textcolor="text-green-600" Bgcolor="bg-green-200"/>
    </div>
  );
};

import { Calendar, SquarePen, Trash2, TrendingDown } from "lucide-react";

const TransactionItem = () => {
  return (
      <div className="grid min-[430px]:grid-flow-col p-5 border-t-2 border-gray-300">
        <div className="flex gap-2 col-span-5">
            
          <div
            className={`bg-red-200 rounded-xl flex justify-center items-center p-3`}
          >
            {" "}
            <TrendingDown size={20} color="red" />
          </div>

          <div>
            <h3 className="text-lg font-semibold ">Gas Bill</h3>
            <p className="flex gap-2">
              <Calendar size={20} color="grey" /> 9/3/24
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-5">
          <h3 className="font-bold text-xl">$-75.00</h3>
          <SquarePen size={20} color="blue" />
          <Trash2 color="red" />
        </div>
      </div>
  )
}

export default TransactionItem
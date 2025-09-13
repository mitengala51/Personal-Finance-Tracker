import { Calendar, SquarePen, Trash2, TrendingDown, TrendingUp } from "lucide-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
import { DeleteTransaction } from "../api";

const TransactionItem = (props) => {

  const { handleOpen, setfetch, fetch, setEditForm } = useContext(GlobalContext)  

  async function handleClick(id) {

    try {
      const data = await DeleteTransaction(id)
      console.log(data)
      setfetch(!fetch)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
      <div className="grid min-[430px]:grid-flow-col p-5 border-t-2 border-gray-300">
        <div className="flex gap-2 col-span-5">
            
          <div
            className={props.category === "Income" ? "bg-green-200 rounded-xl flex justify-center items-center p-3" : `bg-red-200 rounded-xl flex justify-center items-center p-3`}
          >
            {" "}
            {props.category === "Income" ? <TrendingUp size={20} color="green" /> : <TrendingDown size={20} color="red" /> }
          </div>

          <div>
            <h3 className="text-lg font-semibold ">{props?.title}</h3>
            <p className="flex gap-2">
              <Calendar size={20} color="grey" /> {props?.date}
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-5">
          <h3 className="font-bold text-xl">₹ {props?.amount}</h3>
          <SquarePen size={20} color="blue" className="cursor-pointer" onClick={()=>{ setEditForm({id: props._id, edit: true}); handleOpen() }}/>
          <Trash2 color="red" className="cursor-pointer" onClick={()=>{ handleClick(props._id) }}/>
        </div>
      </div>
  )
}

export default TransactionItem
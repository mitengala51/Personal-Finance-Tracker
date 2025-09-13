import Box from "@mui/material/Box";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Modal from "@mui/material/Modal";
import { Plus } from "lucide-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { addTransaction, EditTransaction } from "../api";
import { GlobalContext } from "../context/context";

export default function TransactionForm(props) {

  const { open, handleOpen, handleClose , setfetch, fetch, editForm, setEditForm }  = useContext(GlobalContext)

  const [value, setValue] = useState(dayjs())

  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    date: value.format("YYYY-MM-DD"),
    category: "Income",
  });


  function handleDate(newValue) {
    try {
    setValue(newValue);
    const formatted = newValue ? newValue.format("YYYY-MM-DD") : "";
    setFormData({
      ...formData,
      date: formatted
    })
    console.log("Selected date:", formatted);
    } catch (error) {
      console.log(error);
    }
  }


  async function handleSubmit(e) {
    try {
      e.preventDefault()
      const response = editForm.edit ? await EditTransaction(editForm.id , formData) : await addTransaction(formData) 
      console.log(response)
      setfetch(!fetch)
      setEditForm(false)
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-4">
      <button
        className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex items-center gap-2"
        onClick={handleOpen}
      >
        <Plus /> Add Transaction
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          // sx={style}
          className="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[700px]:min-w-3/5 min-[700px]:w-[600px]  bg-white rounded-[30px] shadow-2xl p-8"
        >
          <div className="flex gap-3">
            <div className="bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 max-sm:hidden">
              <Plus />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold">{editForm.edit ? "Update Transation" : "Add New Transation"}</h3>
              <p className="text-md text-gray-600">
                Track your income and expenses
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-md">Transaction Title</label>
              <input
                placeholder="e.g. Salary, Grocery, Gas Bill"
                className="rounded-lg border-1 border-gray-400 p-3"
                name="title"
                required
                onChange={(e)=> setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md">
                Amount (+ for income, - for expense)
              </label>
              <input
                placeholder="e.g. +1000 or -50"
                className="rounded-lg border-1 border-gray-400 p-3"
                name="amount"
                onChange={(e)=> setFormData({...formData, amount: e.target.value})}
                required
              />
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="Date">
                  <DatePicker defaultValue={value} name="date" onChange={handleDate}/>
                </DemoItem>
              </LocalizationProvider>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md">Category</label>
              <select
                className="rounded-lg border-1 border-gray-400 p-3"
                name="category"
                required
                onChange={(e)=> setFormData({ ...formData, category: e.target.value })}
              >
                <option disabled>Select a category</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <button
              className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex justify-center items-center gap-2"
              // onClick={onSubmit}
              type="submit"
            >
              {editForm.edit ? "Edit Transaction" : "Add Transaction"}
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

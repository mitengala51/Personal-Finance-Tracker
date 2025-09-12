import * as React from "react";
import Box from "@mui/material/Box";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Modal from "@mui/material/Modal";
import { Plus } from "lucide-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export default function TransactionForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="py-4">
      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex items-center gap-2"
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
              <h3 className="text-2xl font-bold">Add New Transation</h3>
              <p className="text-md text-gray-600">
                Track your income and expenses
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-md">Transaction Title</label>
              <input
                placeholder="e.g. Salary, Grocery, Gas Bill"
                className="rounded-lg border-1 border-gray-400 p-3"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md">
                Amount (+ for income, - for expense)
              </label>
              <input
                placeholder="e.g. +1000 or -50"
                className="rounded-lg border-1 border-gray-400 p-3"
                required
              />
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem label="Date">
                  <DatePicker defaultValue={dayjs()} />
                </DemoItem>
              </LocalizationProvider>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-md">Category</label>
              <select className="rounded-lg border-1 border-gray-400 p-3" required>
                <option disabled>Select a category</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex justify-center items-center gap-2"
              onClick={handleOpen}
            >
              Add Transaction
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

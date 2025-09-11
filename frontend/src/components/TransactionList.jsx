import TransactionItem from "./TransactionItem";

function TransactionList() {
  return (
    <div className="grid grid-flow-row bg-white rounded-3xl shadow-lg">
      <div className="p-5 ">
        <h1 className="text-lg font-bold">Recent Transaction</h1>
      </div>
      <TransactionItem />
    </div>
  );
}

export default TransactionList;

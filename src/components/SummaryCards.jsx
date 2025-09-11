

export default function SummaryCards(props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 grid grid-flow-col min-[500px]:grid-cols-3 grid-rows-1">
      <p className="text-sm text-gray-500 font-medium">{props.title}</p>
      <p className={`text-2xl ${props.Textcolor} font-bold col-span-3`}>{props.price}</p>

      <div className={`row-span-2 col-span-3 ${props.Bgcolor} rounded-2xl flex justify-center items-center p-3`}>
        {props.icon}
      </div>
    </div>
  );
}

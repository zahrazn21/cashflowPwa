import  "react";

const scheduleData = {
  headers: ["", "8-10", "10-12", "1-3", "3-5", "5-7"],
  rows: [
    { time: "شنبه", data: ["ریاضی", "فیزیک", "شیمی", "زیست", "ادبیات", "", "ورزش"] },
    { time: "یکشنبه", data: ["فیزیک", "زیست", "ریاضی", "شیمی", "", "ادبیات", ""] },
    { time: "دوشنبه", data: ["شیمی", "ادبیات", "ورزش", "ریاضی", "فیزیک", "", ""] },
    { time: "سه شنبه", data: ["شیمی", "ادبیات", "ورزش", "ریاضی", "فیزیک", "", ""] },
    { time: "چهارشنبه", data: ["شیمی", "ادبیات", "ورزش", "ریاضی", "فیزیک", "", ""] },

  ],
};

const Test = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        {/* جدول هدر */}
        <thead>
          <tr className="bg-gray-200">
            {scheduleData.headers.map((header, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2 text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* بدنه جدول */}
        <tbody>
          {scheduleData.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-bold">{row.time}</td>
              {row.data.map((subject, colIndex) => (
                <td key={colIndex} className="border border-gray-300 px-4 py-2 text-center">
                  {subject || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;

import 'react'
interface Schedule{
  header: string[];
  rows: {
    data: string[];
  }[];
};
interface T{
  data:Schedule
}
export default function TablePlan({ data }: T) {
  // const colorHead = [
  //   "#ffffff",
  //   "#ffffff",
  //   "#03045E",
  //   "#023E8A",
  //   "#00B4D8",
  //   "#90E0EF",
  //   "#48CAE4",
  //   "#48CAE4"
  // ];

  return (
    <div className="w-[432px] h-auto max-h-[70vh] overflow-x-scroll overflow-y-auto">
      {/* <table className="table-auto w-[800px] border-collapse "> */}
      <table dir='rtl' className="table-auto  border-collapse ">

        <thead className="sticky top-0 bg-white z-10 w-[500px]">
          <tr>
            {data.header.map((res, index) => (
              <th  key={index}>
                <p
                  className={`mx-[2px] ${
                    index === 1 || index === 6
                      ? "bg-white text-[#03045E]"
                      : "text-white bg-[#03045E]"
                  } h-[32px] text-[8px] flex justify-center items-center p-1 border border-[#03045E]`}
                >
                  {res}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((res, index) => (
            <tr key={index}>
              {res.data.map((result, i) => (
                <td key={i} className="text-center">
                  <p
                    className={`${
                      i === 1 || i === 6
                        ? "bg-[#03045E] text-white"
                        : "hover:bg-gray-200 cursor-pointer"
                    } border h-[36px] flex justify-center items-center border-[#D9D9D9] m-[2px] p-1 text-[7px]`}
                  >
                    {result}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

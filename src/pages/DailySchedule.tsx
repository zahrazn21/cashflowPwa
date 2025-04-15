import "react";
import { FaRegDotCircle } from "react-icons/fa";
// import TablePlan from '../components/table/TablePlan';
import { useEffect,useRef,useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import TableDailyPlan from "../components/table/TableDailyPlan";
import Date from "../components/ui/date";
import axios from "axios";
import IsLoding from "../utils/loading/IsLoding";
import notFound from "./../assets/image/notFound.png"
// import WeeklySchedule from './WeeklySchedule';
import { motion } from 'framer-motion';

interface Schedule {
  header: string[];
  rows: {
    data: string[];
  }[];
}

export default function DailySchedule() {
  
  const [isloading, setIsLoading] = useState(true);
  const [dataTable, setDataTable] = useState<Schedule>({
    header: [],
    rows: [],
  });
  useEffect(() => {
    // axios.get("http://localhost:3000/DailyScheduleData")
    axios
      .get(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        // نمایش داده‌های دریافتی برای بررسی
        console.log("داده‌های دریافتی از API:", res.data);

        // if (res.data && res.data[0]) {
        //   const fetchedData=res.data[0]
        if (res.data.DailyScheduleData && res.data.DailyScheduleData?.[0]) {
          const fetchedData = res.data.DailyScheduleData?.[0];
          localStorage.setItem(
            "DailyScheduleData",
            JSON.stringify(fetchedData)
          );
          setDataTable(fetchedData);
          setFilteredCourses(fetchedData);
        } else {
          console.error("داده‌ها معتبر نیستند");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("خطا در دریافت داده‌ها:", error);
      });
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("DailyScheduleData");

    if (localData) {
      const parsedData = JSON.parse(localData);
      setDataTable(parsedData);
      setFilteredCourses(parsedData);
      console.log("داده‌ها از LocalStorage بارگذاری شدند.");
    } else {
      console.log(
        "هیچ داده‌ای در LocalStorage پیدا نشد. بررسی کن که آیا داده‌ها ذخیره شدند یا نه."
      );
    }
    setIsLoading(false);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const categirisFilter = [
    {
      title: "دانشکده",
      datas: [
        "همه",
        "علوم",
        "مهندسی",
        "هنر",
        "علوم",
        "مهندسی",
        "حقوق",
        "علوم",
        "مهندسی",
        "ادبیات",
        "هنر",
      ],
    },
    {
      title: "رشته",
      datas: [
        "همه",
        "ریاضی",
        "کامپیوتر",
        "تاریخ هنر",
        "شیمی",
        "نرم‌افزار",
        "حقوق بین‌الملل",
        "عمران",
        "زبان‌شناسی",
        "ادبیات",
      ],
    },
    {
      title: "نوع درس",
      datas: ["همه", "اصلی", "تخصصی", "عمومی", "پایه"],
    },
    {
      title: "مقطع",
      datas: ["همه", "کارشناسی", "کارشناسی ارشد", "دکتری"],
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    filter1: "",
    filter2: "",
    filter3: "",
    filter4: "",
  });

 
  //filter and search
  const handleSelectChange = (key: string, value: string) => {
    setShowTitle(value);
    setFlag(false);
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
    if (value == "همه") {
      setSelectedFilters((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const [filteredCourses, setFilteredCourses] = useState<{ data: string[] }[]>(
    []
  );

  const [filterClick, setFilterClick] = useState(false);

  // فیلتر کردن داده‌ها
  const filterCourses = () => {
    setFilterClick(true);
    const result = dataTable.rows.filter((course) => {
      const courseMoqat = course.data[9]; // مقطع درس
      const courseNoe = course.data[8]; // نوع درس
      const courseDaneshkadeh = course.data[6]; // دانشکده
      const courseReshteh = course.data[7]; // رشته

      // مقایسه مقطع و نوع با ورودی‌های کاربر
      return (
        (selectedFilters.filter3
          ? courseNoe === selectedFilters.filter3
          : true) &&
        (selectedFilters.filter2
          ? courseReshteh === selectedFilters.filter2
          : true) &&
        (selectedFilters.filter1
          ? courseDaneshkadeh === selectedFilters.filter1
          : true) &&
        (selectedFilters.filter4
          ? courseMoqat === selectedFilters.filter4
          : true)
      );
    });
    setFilteredCourses(result); // آپدیت کردن وضعیت با داده‌های فیلتر شده
  };

  // فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
  useEffect(() => {
    const filteredProducts = dataTable.rows.filter((row) => {
      setFilterClick(true);

      // چک کردن جستجو
      const searchMatch = searchTerm
        ? row.data.some((cell) =>
            cell.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true;

      return searchMatch; // هر دو باید true باشن
    });
    setFilteredCourses(filteredProducts);
    console.log("setfilter2222", filteredCourses);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTable, searchTerm]);

  // // تابعی برای تغییر مقدار فیلترها
  // const handleSelectChange = (key:string, value:string) => {
  // setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  // if(value=="همه"){
  //   setSelectedFilters((prev) => ({ ...prev, [key]: " " }));
  // }
  // };

  // // فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
  // const filteredProducts = dataTable.rows.filter((row) => {
  // // چک کردن فیلترها
  // const filterMatch = Object.values(selectedFilters).every((filter) =>
  //   filter
  // ? row.data.some((cell) =>
  //   typeof cell === "string" && cell.toLowerCase().includes(filter.toLowerCase())
  // )
  // : true
  // );

  // // چک کردن جستجو
  // const searchMatch = searchTerm
  // ? row.data.some((cell) =>
  //   typeof cell === "string" && cell.toLowerCase().includes(searchTerm.toLowerCase())
  // )
  // : true;

  // return filterMatch && searchMatch; // هر دو باید true باشن
  // ;
  // });

  const [clickMenu, setClickMenue] = useState(0);
  const [showTitle, setShowTitle] = useState("همه");
  const [flag, setFlag] = useState(false);

  const clickFilter = (index: number) => {
    if (clickMenu) {
      setClickMenue(index);
      setFlag(true);
    } else {
      setClickMenue(-1);
      setFlag(false);
    }
  };
  const boxRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setFlag(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/*    search  */}
      <div dir="rtl" className=" relative p-1 flex justify-center items-center">
        <div
          dir="rtl"
          className="serch  rounded-[15px] ml-2  w-[184px] h-[30px] border-2 border-[#03045E] flex items-center "
        >
          <div className="bg-[#03045E] flex items-center px-1 justify-center rounded-r-[15px] h-[30px] text-white">
            <button>
              <IoMdSearch></IoMdSearch>
            </button>
          </div>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search"
            className="w-[140px] text-[10px] outline-0 mr-2"
          />
        </div>
        <div dir="rtl" className="filter  flex items-center  justify-between">
          <Date></Date>
        </div>
      </div>

      {/*    filter text    */}
      <div
        className="flex items-center mr-5  mb-2 cursor-pointer"
        dir="rtl"
        onClick={filterCourses}
      >
        <div className="text-[#03045E]">
          <CiFilter></CiFilter>
        </div>
        <p className="mr-1 text-[10px]">اعمال فیلتر</p>
      </div>
      <div className="flex justify-center">
        <div
          className="flex justify-around mt-1 mb-5 items-center w-[360px] md:w-[430px]"
          dir="rtl"
        >
          {categirisFilter.map((res, index) => (
            <div className="grid place-content-center text-center justify-items-center">
              <label
                onClick={() => clickFilter(index + 1)}
                className="text-center cursor-pointer select-none  w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]"
              >
                {res.title}
              </label>
              <div className="flex mt-2 justify-center items-center">
                <div className="text-[10px] mr-1 text-[#03045E]">
                  <FaRegDotCircle></FaRegDotCircle>
                </div>
                <div className="text-[10px] ">{index + 1 == clickMenu ? showTitle : Object.values(selectedFilters)[index] || "همه"}</div>
                {clickMenu === index + 1 && flag && (
                  <ul
                  ref={boxRef}

                    className={`text-[10px] gap-[5px] grid  w-[80px] min-w-auto bg-[#fff] border-2 border-[#03045E]  appearance-none py-2 absolute  text-center z-50 top-44  rounded-[15px]  `}
                  >
                    {res.datas.map((result, j) => (
                      <li
                        onClick={() =>
                          handleSelectChange(`filter${index + 1}`, result)
                        }
                        dir="rtl"
                        className=" cursor-pointer py-[2px]  px-2 hover:bg-[#03045E] hover:text-white border-none outline-none text-[10px]"
                        value={j == 0 ? "" : result}
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isloading ? (
        <>
          <IsLoding></IsLoding>
        </>
      ) : filterClick == false ? (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <TableDailyPlan data={dataTable} />
        </motion.div>

      ) : filteredCourses.length > 0 ? (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
         <TableDailyPlan
          data={{ header: dataTable.header, rows: filteredCourses }}/>
        </motion.div>
      
      ) : (
        // <TablePlan data={data}></TablePlan>
        <div className="text-center mt-14"> 
          <img src={notFound} alt="" />
        </div>
      )}

      {/* <Routes>
            <Route path={"weeklySchedule"} element={<WeeklySchedule></WeeklySchedule>}></Route>
          </Routes> */}

      {/* <WeeklySchedule></WeeklySchedule> */}
    </div>
  );
}

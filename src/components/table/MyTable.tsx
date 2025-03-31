// import axios from 'axios'
// import  { useEffect, useState } from 'react'
// export interface Root {
//     userId: number
//     id: number
//     title: string
//     completed: boolean
//   }
  
// export default function MyTable() {
    
//     const [data, setData] = useState<Root>({
//         userId: 0,
//         id: 0,
//         title: "",
//         completed: false
//     })
//     useEffect(()=>{
//         axios.get("http://localhost:3000/dataFake").then((res)=>{
//               setData(res)
//         })
//     },[])
//   return (
//     <div>
      
//     </div>
//   )
// }
// import  "react";

// const coursesData = [
//   { "data": ["مبانی مدیریت پروژه", "مجتبی محمودیان", "دانشکدگان ‌فنی", "2", "هرهفته, 13:30-15:30", "اختیاری", "کارشناسی", "نیم سال اول سال تحصیلی 1403-1404"] },
//   { "data": ["اقتصاد مهندسی", "نوید خادمی اختیاری", "دانشکدگان ‌فنی", "2", "هرهفته, 15:30-17:30", "تخصصی", "کارشناسی", "نیم سال اول سال تحصیلی 1403-1404"] },
//   { "data": ["پردازش تصاویر پیشرفته", "محمدرضا سراجیان مارالان", "دانشکدگان ‌فنی", "3", "هرهفته, 15:00-16:30", "تخصصی", "کارشناسی ارشد", "نیم سال اول سال تحصیلی 1403-1404"] },
//   { "data": ["اصول سنجش از دور", "محمدرضا سراجیان مارالان", "دانشکدگان ‌فنی", "3", "هرهفته, 10:30-12:00", "تخصصی", "کارشناسی", "نیم سال اول سال تحصیلی 1403-1404"] },
//   // داده‌های بیشتر
// ];

//  export default function MyTable() {
//     const [moqat, setMoqat] = useState("");  // مقطع
//   const [noe, setNoe] = useState("");      // نوع درس
//   const [filteredCourses, setFilteredCourses] = useState(coursesData);

//   // فیلتر کردن داده‌ها
//   const filterCourses = () => {
//     const result = coursesData.filter(course => {
//       const courseMoqat = course.data[6];  // مقطع درس
//       const courseNoe = course.data[5];    // نوع درس

//       // مقایسه مقطع و نوع با ورودی‌های کاربر
//       return (
//         (moqat ? courseMoqat === moqat : true) &&
//         (noe ? courseNoe === noe : true)
//       );
//     });

//     setFilteredCourses(result);  // آپدیت کردن وضعیت با داده‌های فیلتر شده
//   };

//   return (
//     <div>
//       <h1>دوره‌های درسی</h1>

//       {/* فرم فیلتر */}
//       <div>
//         <label>مقطع:</label>
//         <select onChange={(e) => setMoqat(e.target.value)} value={moqat}>
//           <option value="">همه مقاطع</option>
//           <option value="کارشناسی">کارشناسی</option>
//           <option value="کارشناسی ارشد">کارشناسی ارشد</option>
//           <option value="دکتری">دکتری</option>
//         </select>
//       </div>

//       <div>
//         <label>نوع درس:</label>
//         <select onChange={(e) => setNoe(e.target.value)} value={noe}>
//           <option value="">همه نوع‌ها</option>
//           <option value="تخصصی">تخصصی</option>
//           <option value="پایه">پایه</option>
//           <option value="اصلی">اصلی</option>
//           <option value="اختیاری">اختیاری</option>
//         </select>
//       </div>

//       <button onClick={filterCourses}>فیلتر کردن</button>

//       {/* نمایش داده‌های فیلتر شده */}
//       <ul>
//         {filteredCourses.map((course, index) => (
//           <li key={index}>
//             <strong>{course.data[0]}</strong> - {course.data[1]} - {course.data[6]} - {course.data[5]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


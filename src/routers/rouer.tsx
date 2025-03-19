import MenuMain from "../components/MenuBar/MenuMain";
import HomePage from "../pages/HomePage";
// import Table1 from "../pages/Table1";
import ProfessorsClass from "../pages/ProfessorsClass";
import SerchFilter from "../components/header/Serch&Filter";

export const routes=[
    {path:"/" , element:<HomePage></HomePage>},
    {path:"/SerchFilter" , element:<SerchFilter/>},
    {path:"/menu" , element:<MenuMain/>},
    {path: "/professorsClass", element:<ProfessorsClass></ProfessorsClass>},

]


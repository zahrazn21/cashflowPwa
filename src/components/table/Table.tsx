import  'react'
import Tr from './Tr'
import Thead from './Thead'
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
 
// import data from "../../data/data"
// import Test from './Test'
// import TablePlan from './TablePlan'

export default function Table() {
//   const datahead=[
//     {title:"شنبه"},
//     {title:"یکشنیه"},
//     {title:"دوشنبه"},
//     {title:"سه شنبه"},
//     {title:"چهارشنبه"},

// ]
// const dataRow1=[
//   {title:"8-10"},
//   {title:"10-12"},
//   {title:"1-3"},
//   {title:"3-5"},
//   {title:"5-7"},

// ]

const scheduleData = {
  headers: [ "8-10", "10-12", "1-3", "3-5", "5-7"],
  rows: [
    { time: "شنبه", data: ["ریاضی", "", "شیمی", "زیست",""] },
    { time: "یکشنبه", data: ["فیزیک", "زیست", "ریاضی", "","cds"] },
    { time: "دوشنبه", data: ["", "ادبیات", "ورزش", "", ""] },
    { time: "سه شنبه", data: ["شیمی", "", "فیزیک", "",""] },
    { time: "چهارشنبه", data: ["","",  "ریاضی", "فیزیک", "",] },

  ],
};
  return (
   <div className='bg-white h-[100vh] flex items-center p-2'>
     <table dir='rtl' className=''>
     <Thead datas={scheduleData.headers}></Thead>
  
  
  {scheduleData.rows.map((res, index)=>(
     <tr>
      <td key={index} className={`${index===0 ? 'rounded-br-[12px]' :"rounded-r-[12px]"} bg-[rgb(24_73_103)]  h-[50px] text-center text-[5px] `}>
        <p className="rotate-90 w-[20px]">
        {res.time} 
        </p>
        </td>
      <Tr datas={res.data} ></Tr>
     </tr>
  ))}
    

    </table>
    
    {/* <Test></Test>
    <TablePlan></TablePlan> */}
    
    {/* <Button>click me</Button>
    <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>    <TabsTrigger value="password">Password</TabsTrigger>

    <TabsTrigger value="m">m</TabsTrigger>
    <TabsTrigger value="v">v</TabsTrigger>

    <TabsTrigger value="7">7</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs> */}



{/* <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card> */}

   </div>
  )
}

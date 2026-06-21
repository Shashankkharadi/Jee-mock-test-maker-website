import { useState } from "react";

export default function CreateTest() {

 const [form,setForm] = useState({
   exam:"",
   class:"",
   subject:"",
   chapter:"",
   difficulty:"",
   duration:""
 });

 return (
   <div className="p-10">

     <h1 className="text-3xl font-bold">
       Create Mock Test
     </h1>

     <select>
       <option>JEE Main</option>
       <option>JEE Advanced</option>
       <option>NEET</option>
     </select>

     <select>
       <option>Class 11</option>
       <option>Class 12</option>
     </select>

     <select>
       <option>Physics</option>
       <option>Chemistry</option>
       <option>Maths</option>
       <option>Biology</option>
     </select>

   </div>
 );
}

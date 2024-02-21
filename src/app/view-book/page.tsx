"use client"
import { Booktable } from "@/_components/booktable";
import { BookUser} from "lucide-react";
import { supabase } from "../db/config";
import { useEffect, useState } from "react";

export type Library = {
  id: number
  title: string
  author:string
  dop:String
  category: string
};

export default  function page() {

  const [tableData , setTableData] = useState([]);

   useEffect(() => {
    async function get(){
    const { data, error } : any = await supabase.from("Library").select();
    setTableData(() => data )
    }
    get()
   },[])
    
   
  return (
   
     <div>
      <Booktable data={tableData} />
    </div>
  );
}

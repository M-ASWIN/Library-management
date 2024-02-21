"use client";
import { DataTableDemo, Library } from "@/_components/library";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../db/config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Main } from "next/document";
export default function Home() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const [dop, setdop] = useState("");
  const [category, setcategory] = useState("");
  const [count, setcount] = useState(0);

  const [tabledata, settableData] = useState<Library[]>();
  async function fetchData() {
    const { data, error } = await supabase.from("Library").select();
    console.log(data);
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    settableData(() => data);
  }

  async function handleclick() {
    const { data, error } = await supabase.from("Library").insert([
      {
        title: title,
        author: author,
        dop: new Date(dop),
        category: category,
        count: count,
      },
    ]);
    await fetchData();
    if (error) {
      console.log(error);
      alert("error occured cant get data");
    } else {
      setTitle("");
      const dateDiv = document.getElementById("date-div");
      const dateInput = document.getElementById("date-input");
      const newDateInput = document.createElement("input");
      setdop("");
      setauthor("");
      setcategory("");
      setcount(0);
      alert("Data Inserted Successfully");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="w-full">
      <nav className="bg-gray-50 text-black w-full fixed top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a className="text-xl font-bold" href="/">
            Libra<a className="text-blue-700">Verse</a>
          </a>
        </div>
      </nav>
      <div className="h-full mt-[5rem] px-4 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold my-8 ">
          Embark on a literary journey with our{" "}
          <a className="text-blue-700">
            curated collection of captivating books
          </a>
        </p>
        <p>TITLE</p>
        <Input
          placeholder="Harry Potter and the Philosopher's Stone"
          className="max-w-xl my-3 border-2 border-black"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p>AUTHOR</p>
        <Input
          placeholder="J.K. Rowling"
          className="max-w-xl my-3 border-2 border-black"
          onChange={(e) => setauthor(e.target.value)}
          value={author}
        />
        <p>DATE OF PUBLISH</p>
          <Input
            className="max-w-xl my-3 border-2 border-black"
            type="date"
            placeholder="dop"
            onChange={(e) => setdop(e.target.value)}
            value={dop}
          />
        <p>CATEGORY</p>
        <Input
          placeholder="Fantasy"
          className="max-w-xl my-3 border-2 border-black"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <p>COUNT</p>
        <Input
          placeholder="10"
          className="max-w-xl my-3 border-2 border-black"
          onChange={(e) => setcount(Number(e.target.value))}
          value={count}
        />

        <div className="flex mt-5">
          <div className="mr-5">
            <Link href={"/add-book"}>
              <button
                className="bg-blue-700 text-white text-lg p-2 px-7 ml-2 rounded-md"
                onClick={handleclick}
              >
                ADD
              </button>
            </Link>
          </div>
          <Link href={"/view-book"}>
            <button className="bg-blue-700 text-white text-lg p-2 px-7 ml-2 rounded-md">
              VIEW
            </button>
          </Link>
        </div>
      </div>
      </main>
    
  );
}

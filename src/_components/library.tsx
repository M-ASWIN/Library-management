"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/app/db/config";
import { useRouter } from "next/navigation";

export type Library = {
  id: number
  title: string
  author:string
  dop:String
  category: string
  count: number
};

export function DataTableDemo({
  data,
  setData,
}: {
  data: Library[] | undefined;
  setData: React.Dispatch<React.SetStateAction<Library[] | undefined>>;
}) {
  const router = useRouter();
  return (
    <div className="w-full px-4">
      
    </div>
  );
}

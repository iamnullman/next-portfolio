import { useEffect, useState } from "react";
import Link from "next/link";
import portfolio from "../lib/portfolio"
export default function Portfolio() {
  return (
    <div id="repo-component">

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 w-full gap-2 items-center mt-4">
        {portfolio.map((item: any, index: number) => (
        <div className="h-full relative transition-all duration-200 flex flex-col py-4 px-5 cursor-pointer">
          <img src={item} alt="" className="w-full h-full rounded-md hover:scale-125 duration-700" />
        </div>
        ))}
      </div>
    </div>
  );
}

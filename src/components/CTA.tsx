import React from "react";
import { cn } from "../lib/utils";
import Link from "next/link";

interface propChildren {
  children: React.ReactNode;
  className?:string;
  url:string
}
function CTA({ children, className, url }: propChildren) {
  return <Link href={url} className={cn("p-2 rounded-lg flex items-center justify-center h-[50px] cursor-pointer", className)}>{children}</Link>;
}

export default CTA;

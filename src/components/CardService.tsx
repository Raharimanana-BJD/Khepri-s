import { cn } from "@/lib/utils";

interface CardServiceProps {
  children:React.ReactNode;
  className?:string
}

export default function CardService({children, className}:CardServiceProps) {
  return (
    <div className={cn("p-4 md:p-8 rounded-lg border border-secondary-500 flex flex-col items-center md:items-start", className)}>
      {children}
    </div>
  )
}
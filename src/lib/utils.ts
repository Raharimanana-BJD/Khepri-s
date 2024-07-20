import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const stylesIcon = {
  black: "rgb(15, 15, 15)",
  yellow: "rgb(245, 191, 4)",
};

export { stylesIcon };
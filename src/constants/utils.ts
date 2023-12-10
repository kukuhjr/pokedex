import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// PRINT ID OF POKEMON -> 000(ID)
export function printId(num: number) {
  return String(num).padStart(4, '0')
}
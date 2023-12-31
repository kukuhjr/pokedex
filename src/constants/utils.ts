import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// PRINT ID OF POKEMON -> 000(ID)
export function printId(num: number) {
  return String(num).padStart(4, '0')
}

// GET ID ON URL
// INPUT FORMAT THAT WORKS: https://pokeapi.co/api/v2/generation/{ID}/
// OUTPUT: ID / NULL (IF INPUT => "")
export function getIdOnUrl(url: string) {
  const splitUrl = url.split("/")
  const id = splitUrl[splitUrl.length - 2]

  return id
}
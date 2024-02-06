import { Currencies } from "../types/common";

export const getAvailableCurrencies = async (): Promise<Currencies | null> => {
  const res = await new Promise<Currencies>((res)=>{
    setTimeout(() => {
      res({rub: 2, usd: 5})
    }, 1000);
  })
  
  return res || null
}
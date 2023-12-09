import { BlockStateContext } from "@/context/blockContext";
import { useContext, useEffect } from "react";
interface Props{
  
    themeColor?:string
    
}
export function useSetFirstEffect({  themeColor, }:Props){
    const input = useContext(BlockStateContext)
    const { setBlockState} = input
   
    useEffect(()=>{
       
       themeColor? setBlockState({   ...input, themeColor,})
       
       :null
    },[])
}

    
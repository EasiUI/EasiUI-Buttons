import { InputStateContext } from '@/context/inputContext'
import React, { useContext, useState ,useEffect} from 'react'
export function useGetBtnTextSize(textSize:string){
    const {textFieldHight} = useContext(InputStateContext)
    const [textSixeFinal,setTextSizeFinal]=useState<string |null>(null)
    useEffect(()=>{
        switch (textSize) {
            case "7":
                setTextSizeFinal("sm")
                break;
            case "8":
                setTextSizeFinal("sm")
                break;
            case "9":
                setTextSizeFinal("base")
                break;
            case "10":
                setTextSizeFinal("base")
                break;
            case "11":
                setTextSizeFinal("lg")
                break;
            case "12":
                setTextSizeFinal("xl")
                break;
            case "14":
                setTextSizeFinal("2xl")
                break;
            case "16":
                setTextSizeFinal("2xl")
                break;
        
            default:
                break;
        }
    },[textFieldHight])
    return textSixeFinal
}
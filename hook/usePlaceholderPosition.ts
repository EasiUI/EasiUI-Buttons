import { InputStateContext } from '@/context/inputContext'
import React, { useContext, useState ,useEffect} from 'react'
export function usePlaceholderPosition(){
    const {textFieldHight} = useContext(InputStateContext)
    const [peerTop,setPeerTop]=useState<string |null>(null)
    useEffect(()=>{
        switch (textFieldHight) {
            case "h-7":
                setPeerTop("peer-placeholder-shown:top-1")
                break;
            case "h-8":
                setPeerTop("peer-placeholder-shown:top-2")
                break;
            case "h-9":
                setPeerTop("peer-placeholder-shown:top-2")
                break;
            case "h-10":
                setPeerTop("peer-placeholder-shown:top-2.5")
                break;
            case "h-11":
                setPeerTop("peer-placeholder-shown:top-3")
                break;
            case "h-12":
                setPeerTop("peer-placeholder-shown:top-4")
                break;
            case "h-14":
                setPeerTop("peer-placeholder-shown:top-5")
                break;
            case "h-16":
                setPeerTop("peer-placeholder-shown:top-6")
                break;
        
            default:
                break;
        }
    },[textFieldHight])
    return peerTop
}
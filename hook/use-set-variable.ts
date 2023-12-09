"use client"
import { InputStateContext } from "@/context/inputContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

interface Props{
    bgColor?:string 
    bgColor2?:string 
    textColor?:string 
    borderColor?:string 
    shadowColor?:string 
    shadowSize?:string 
    componentHeight?:string 
    componentWidth?:string 
    hoverColor?:string 
    avatarSize?:string
    textFieldHight?:string
    width?:string
    rounded?:string
    smallHeight?:string
    fileSize?:string
    largeWidth?:string
    mediumHeight?:string
    largeHeight?:string
    text?:string
    
    
}
export function useSetVariable({ textColor,bgColor, shadowColor, shadowSize, text,largeHeight,
    mediumHeight,largeWidth,fileSize, avatarSize,smallHeight,rounded, width, textFieldHight,
hoverColor,componentHeight,componentWidth,bgColor2 }:Props){
    const input = useContext(InputStateContext)
    const { setInputState} = input
   const router=useRouter()
    useEffect(()=>{
       textColor? setInputState({   ...input, textColor,})
       :avatarSize? setInputState({   ...input, avatarSize,})
       :shadowSize? setInputState({   ...input, shadowSize,})
       :shadowColor? setInputState({   ...input, shadowColor,})
       :bgColor? setInputState({   ...input, bgColor,})
       :text? setInputState({   ...input, text,})
       :largeHeight? setInputState({   ...input, largeHeight,})
       :largeHeight? setInputState({   ...input, largeHeight,})
       :mediumHeight? setInputState({   ...input, mediumHeight,})
       :largeWidth? setInputState({   ...input, largeWidth,})
       :largeWidth? setInputState({   ...input, largeWidth,})
       :fileSize? setInputState({   ...input, fileSize,})
       :bgColor2? setInputState({   ...input, bgColor2,})
       :componentHeight? setInputState({   ...input, componentHeight,})
       :componentWidth? setInputState({   ...input, componentWidth,})
       :hoverColor? setInputState({   ...input, hoverColor,})
       :textFieldHight? setInputState({   ...input, textFieldHight,})
       :width? setInputState({   ...input, width,})
       :smallHeight? setInputState({   ...input, smallHeight,})
       :rounded? setInputState({   ...input, rounded,})
       :null
    },[router,input])
}

    
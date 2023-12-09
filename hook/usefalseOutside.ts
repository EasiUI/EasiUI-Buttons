"use client"
import React,{useEffect} from "react";
export const usefalseOutside = (wrapperRef:any, setIsOpen:any) => {
    useEffect(() => {
      function handleClickOutside(event:any) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef]);
  };
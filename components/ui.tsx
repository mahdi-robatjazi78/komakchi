"use client";
import React from 'react'
import {Input} from '@nextui-org/react'
import {useTheme} from "next-themes" 


export function MyInupt(props : any){


  const {theme , resolvedTheme ,themes, forcedTheme} = useTheme()

  console.log("---->", theme)

  const themeIsColory = theme === "blue-dark" || theme === "purple-dark" || theme=== "green-dark"

  return(

    <Input
      {...props} 
      classNames={{
        label : themeIsColory ? "text-red" : "text-black/50"
      }}

    
    />
  )
}
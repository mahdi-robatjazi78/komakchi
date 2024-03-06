'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider
    >
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        themes={['light' , "dark" , 'purple-dark' , 'green-dark' , 'blue-dark']}
      >
      {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
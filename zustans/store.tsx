import { create } from 'zustand'

const useThemeStore = create((set) => ({
  theme: "light",

  setThemeDark:()=>set((state:any)=>({theme:"dark"})),
  setThemeLight:()=>set((state:any)=>({theme:"light"})),
  setThemeToggle:()=>set((state:any)=>({theme : state.theme === "light" ? "dark" : "light"}))
 
}))


export default useThemeStore
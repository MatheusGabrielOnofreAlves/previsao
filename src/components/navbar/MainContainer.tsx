import Navbar from "./navbar";
import { ReactNode } from "react";
interface MainContainerProps {
    children: ReactNode
  }

export default function MainContainer ({children}: MainContainerProps){
    return (
        <>
        <Navbar/>
        <div>{children}</div>
        </>
        
    )
}
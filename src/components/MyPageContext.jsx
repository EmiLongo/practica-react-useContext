import { useState } from "react"
import FooterContext from "./FooterContext"
import HeaderContext from "./HeaderContext"
import MainContext from "./MainContext"
import { ThemeProvider } from "../assets/context/ThemeContext"
import { LanguageProvider } from "../assets/context/LanguageContext"
import { AuthProvider } from "../assets/context/AuthContext"

const MyPageContext = () => {
    return (
    <div className="my-page">
        <LanguageProvider>
        <ThemeProvider>
        <AuthProvider>
            <HeaderContext  />
            <MainContext  />
            <FooterContext  />
        </AuthProvider>
        </ThemeProvider>
        </LanguageProvider>
    </div>
  )
}

export default MyPageContext
import { useContext } from "react"
import ThemeContext from "../assets/context/ThemeContext"
import LanguageContext from "../assets/context/LanguageContext"

const FooterContext = () => {
  const { isThemeLight } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)


  return (
    <footer className={isThemeLight ? "" : "dark"}>
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext
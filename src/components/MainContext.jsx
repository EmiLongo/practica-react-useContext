import { useContext } from "react"
import ThemeContext from "../assets/context/ThemeContext"
import LanguageContext from "../assets/context/LanguageContext"
import AuthContext from "../assets/context/AuthContext"

// necesito isThemeLight desde context


const MainContext = () => {
  const { isThemeLight } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)
  const { auth } = useContext(AuthContext)


  return (
    <main className={isThemeLight ? "" : "dark"}>
        {auth ?        
        <p>{texts.mainHello}</p> :
        <p>{texts.mainWelcome}</p>
        }

        <p>{texts.mainContent}</p>
    </main>
  )
}

export default MainContext
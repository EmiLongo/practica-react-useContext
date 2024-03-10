import { useContext } from "react"
import ThemeContext from "../assets/context/ThemeContext"
import LanguageContext from "../assets/context/LanguageContext"
import AuthContext from "../assets/context/AuthContext"

const HeaderContext = () => {
  const { isThemeLight, handleTheme } = useContext(ThemeContext)
  const { texts, handleLanguange } = useContext(LanguageContext)
  const { auth, handleAuth } = useContext(AuthContext)

  return (
    <header className={isThemeLight ? "" : "dark"}>
    <h2>{texts.headerTitleContext}</h2>
    <h3>{texts.headerSubtitle}</h3>
    <select name="language" onChange={handleLanguange}>
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
    <input type="radio"
        name="theme-context"
        id="light-context"
        onClick={handleTheme}
        
    />
    <label htmlFor="light-context">{texts.headerLight}</label>
    <input type="radio"
        name="theme-context"
        id="dark-context"
        onClick={handleTheme}
    />
    <label htmlFor="dark-context">{texts.headerDark}</label>
    <button onClick={handleAuth}>{auth ? texts.buttonLogout : texts.buttonLogin}</button>
    </header>
  )
}

export default HeaderContext
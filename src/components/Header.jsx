const Header = ({isThemeLight , handleTheme, texts, handleLanguange, auth, handleAuth}) => {
  return (
    <header className={isThemeLight ? "" : "dark"}>
    <h2>{texts.headerTitle}</h2>
    <h3>{texts.headerSubtitle}</h3>
    <select name="language" onChange={handleLanguange}>
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
    <input type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
    />
    <label htmlFor="light">{texts.headerLight}</label>
    <input type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
    />
    <label htmlFor="dark">{texts.headerDark}</label>
    <button onClick={handleAuth}>{auth ? texts.buttonLogout : texts.buttonLogin}</button>
    </header>
  )
}

export default Header
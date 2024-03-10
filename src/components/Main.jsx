const Main = ({isThemeLight, texts, auth}) => {
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

export default Main
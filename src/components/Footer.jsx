const Footer = ({isThemeLight, texts}) => {
  return (
    <footer className={isThemeLight ? "" : "dark"}>
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default Footer
import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { translation } from "../assets/helpers/languages"

//initial variables definition
const initialIsThemeLight = true;
const initialLanguage = 'es';
const initialAut = null;

const MyPage = () => {
    //theme dark o light
    const [isThemeLight, setIsThemeLight] = useState(initialIsThemeLight)
    const handleTheme = (e) => {
        if(e.target.id == "light"){
            setIsThemeLight(true)
        }
        if(e.target.id == "dark"){
            setIsThemeLight(false)
        }
    }


    const [texts, setTexts] = useState(translation[initialLanguage])
    const handleLanguange = (e) => {
        if(e.target.value == "es"){
            setTexts(translation["es"])
        } 
        if(e.target.value == "en"){
            setTexts(translation["en"])
        }
    }

    //login authorization
    const [auth, setAuth] = useState(initialAut)
    const handleAuth = (e) => {
        if(auth){
            setAuth(false)
        } else {
            setAuth(true)
        }
    }

    return (
    <div className="my-page">
        <Header isThemeLight={isThemeLight} 
            handleTheme={handleTheme} 
            texts={texts} 
            handleLanguange={handleLanguange}
            auth= {auth}
            handleAuth = {handleAuth}
        />
        <Main isThemeLight={isThemeLight} texts={texts} auth= {auth} />
        <Footer isThemeLight={isThemeLight} texts={texts} />
    </div>
  )
}

export default MyPage
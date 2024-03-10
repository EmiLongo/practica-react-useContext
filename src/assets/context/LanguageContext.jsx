import { createContext, useState } from "react";
import { translation } from "../helpers/languages"


const initialLanguage = 'es';

const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
        // languages
        const [texts, setTexts] = useState(translation[initialLanguage])
        const handleLanguange = (e) => {
            if(e.target.value == "es"){
                setTexts(translation["es"])
            } 
            if(e.target.value == "en"){
                setTexts(translation["en"])
            }
        }

    const value = { texts, handleLanguange };
    
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export {LanguageProvider}
export default LanguageContext
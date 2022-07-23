import React, {useContext} from 'react'
import ThemeContext from '../Context/themeContext'

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    
    // console.log(themeMode);

    return(
        <div
        onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}
        >
         
         <span>{themeMode === "light" ? "turn off" : "lights on"}</span>

        </div>
    )
}

export default ThemeToggler;
import React, {useState} from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";

const App = () =>{
    const themeHook = useState("dark")
    return(
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header />
          <HeroSection />
        </div>
      </ThemeContext.Provider>
    )
}

export default App;


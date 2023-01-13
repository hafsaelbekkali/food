import { createContext, useState } from 'react';
import Home from './components/Home';
import ThemeButton from './components/Theme';


export const ThemeContext = createContext(null)

function App() {

  const [theme,setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className=" bg-white min-h-screen p-2 " style={theme ?{ backgroundColor:"#000"}:{}}>
      <ThemeButton/>
      <Home />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;

import { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeButton = () => {
     const { theme, setTheme } = useContext(ThemeContext)
     return (
          <div className=" flex justify-center rotate-180 mb-4 ">
               <button style={theme ? { backgroundColor: "none" } : {}} onClick={() => setTheme(!theme)} ><i className="bi bi-lightbulb-fill text-5xl text-orange-400" style={theme ? { backgroundColor: "none", color: "white" } : {}}></i></button>
          </div>
     )
}
export default ThemeButton;
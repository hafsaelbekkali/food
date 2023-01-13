import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Search = (props) => {
     const { getDataSearch, apiCalledSuccess, setApiSuccess } = props;
     const [InputValue, setInputValue] = useState('');
     const handelValue = (e) => {
          const { value } = e.target;
          setInputValue(value)
     }
     const handelSubmit = (e) => {
          e.preventDefault()
          getDataSearch(InputValue)
     }
     useEffect(() => {
          if (apiCalledSuccess) {
               setInputValue('');
               setApiSuccess(false);
          }
     }, [apiCalledSuccess]);
     const { theme } = useContext(ThemeContext);
     return (
          <div >
               <form onSubmit={handelSubmit} className=' space-x-4 flex justify-end px-4 py-2 mb-4 '>
                    <input type="search" value={InputValue} onChange={handelValue} placeholder='Search Recipes ...' id='search' className=' px-3 py-1 rounded-md text-xl hover:text-orange-600 hover:text-xl hover:border-orange-600 border-black border-b-4 text-orange-600 bg-white' style={theme ? { border: " none", boxShadow: "2px 2px 2px 2px orange" } : {}} />
                    <button type="submit" className=' bg-white text-black px-4 py-1 rounded-md text-lg  hover:text-orange-600 hover:text-xl hover:border-orange-600  font-bold italic border-black border-b-4 ' style={theme ? { background: "orange", border: "none", boxShadow: "2px 2px 2px 2px #eee", color: "#fff" } : {}} > Search </button>
               </form>
          </div>
     )
}

export default Search
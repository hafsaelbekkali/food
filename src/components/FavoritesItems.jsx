import React from 'react';
import { ThemeContext } from '../App';
import { useContext } from 'react';


const FavoritesItems = (props) => {

  const { id, image, removeFromFavorites, title } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div key={id} className='item border-2  p-3 text-center space-y-4 bg-white  rounded-2xl mt-7' style={theme ? { boxShadow: "2px 2px 2px 2px rgb(229, 112, 3) , -2px -2px 2px 2px #000" } : {}}  >
      <div>
        <img src={image} alt="img-food" className=' rounded-xl' />
      </div>
      <p className=' text-black italic text-xl'>{title}</p>
      <button type='button' onClick={removeFromFavorites} className=' bg-black px-4 py-1 text-white font-semibold italic rounded-lg  hover:bg-orange-500 hover:text-white hover:text-xl' style={theme ? { background: "rgb(229, 112, 3)", color: "#fff" } : {}}>Remove From favorites</button>
    </div>
  );
}

export default FavoritesItems;

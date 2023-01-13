import { React, useEffect, useState } from 'react'
import FavoritesItems from './FavoritesItems';
import RecipeItem from './RecipeItem';
import Search from './Search';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const data = '';
const Home = () => {
     // Loading state
     const [loading, setLoading] = useState(false);
     // Save results that we receive from api
     const [recipes, setRecipes] = useState([]);
     // favorites data state
     const [favorites, setFavorites] = useState([]);
     // state for api is successFull or not
     const [apiCalledSuccess,setApiSuccess]=useState(false)

     const getDataSearch = (getData) => {
          // keep the loading state as true before we are calling the api
          setLoading(true);
          // calling the api
          async function getRecipes() {
               const apiRecipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=abad56e931c64043a97ee4c034d5f4c2&query=${getData}`);
               const result = await apiRecipes.json();
               const { results } = result;
               if (results && results.length > 0) {
                    setLoading(false);
                    setRecipes(results);
                    setApiSuccess(true);
               };
          }
          getRecipes()
     };

     const addToFavorites = (getCurrentRecipeItem) => {
          console.log(getCurrentRecipeItem);
          let cpyFavorites = [...favorites];

          const index = cpyFavorites.findIndex(item => item.id === getCurrentRecipeItem.id)
          console.log(index)
          if (index === -1) {
               cpyFavorites.push(getCurrentRecipeItem)
               setFavorites(cpyFavorites)

               // Save the favorites in Local Storage
               localStorage.setItem('favorites', JSON.stringify(cpyFavorites))
          } else {
               alert('item is already present in favorites 👌')
          }
     };

     // remove favorite
     const removeFromFavorites = (getCurrentId) => {
          let cpyFavorites = [...favorites];
          cpyFavorites = cpyFavorites.filter(item => item.id !== getCurrentId);
          setFavorites(cpyFavorites);
          localStorage.setItem('favorites', JSON.stringify(cpyFavorites))
          alert('are you already delete  in favorites 👀')
     }

     useEffect(() => {
          const extractFavoritesFromLocalStorageOnPageLoad = JSON.parse(localStorage.getItem('favorites'));
          setFavorites(extractFavoritesFromLocalStorageOnPageLoad)
     }, [])

     const {theme} = useContext(ThemeContext);

     return (
          <div className='home'>
               <Search 
               getDataSearch={getDataSearch} 
               data={data} 
               apiCalledSuccess={apiCalledSuccess}
               setApiSuccess={setApiSuccess}
               />

               {/* Show favorites items */}
               <div>
                    <h1 className=' text-center text-6xl italic font-mono text-black ' style={theme ?{ color: "#fff" , textShadow: "3px 2px 2px rgb(229, 112, 3)"}:{}}> Favorites </h1>
                    <div className="favorites flex gap-7 mb-8 justify-center flex-wrap">
                         {
                              favorites && favorites.length > 0 ?
                                   favorites.map(item => (
                                        <FavoritesItems
                                             removeFromFavorites={() => removeFromFavorites(item.id)}
                                             id={item.id}
                                             image={item.image}
                                             title={item.title}
                                        />
                                   ))
                                   : null
                         }
                    </div>
               </div>

               {/* show loading state */}
               {loading && <span className="loader flex justify-center text-6xl font-bold text-gray-900">Loading....</span>}

               {/* All the recipes */}
               <div className='items flex gap-7 mb-8 justify-center flex-wrap'>
                    {
                         recipes && recipes.length > 0 ? recipes.map((item) => <RecipeItem
                              addToFavorites={() => addToFavorites(item)}
                              id={item.id}
                              image={item.image}
                              title={item.title} />) : null
                    }
               </div>
          </div>
     )
}
export default Home;
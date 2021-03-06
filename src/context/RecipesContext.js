import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

  const [ recipes, setRecipes ] = useState([]);
  const [ searchRecipes, setSearchRecipes ] = useState({
    ingredient: "",
    category: ""
  })
  const [ query, setQuery ] = useState(false);

  const { ingredient, category } = searchRecipes;

  let cat;
  if(category.split(" ").length <= 2) {
  cat = category.split(" ").join("_");
  } else {
    cat = category.replaceAll(" ","").replaceAll("/","_");
  }

  useEffect(() => {
    if(query) {
      const fetchAPI = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${cat}`;
        const data = await axios.get(url);
        setRecipes(data.data.drinks);
      }
      fetchAPI();
    }
    
  }, [searchRecipes, cat, ingredient, query])

  return(
    <RecipesContext.Provider
      value={{
        recipes,
        setSearchRecipes,
        setQuery
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider;
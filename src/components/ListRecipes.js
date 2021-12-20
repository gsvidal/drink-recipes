import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";
import Error from "./Error";

const ListRecipes = () => {

  // Extract recipes
  const { recipes } = useContext(RecipesContext);

  if(!recipes) return <Error />;
  
  return (
    <div className="row mt-5">
      { recipes.map(recipe => (
        <Recipe
          key={recipe.idDrink}
          recipe={recipe}
        />
      ))}
    </div>
  )
}

export default ListRecipes

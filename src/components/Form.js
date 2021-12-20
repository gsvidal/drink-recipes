import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {

  const [ search, setSearch ] = useState({
    ingredient: "",
    category: ""
  })

  const { ingredient, category } = search;

  const { categories } = useContext(CategoriesContext);
  const { setSearchRecipes, setQuery } = useContext(RecipesContext);

  // handleChange function to get input's contents
  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    })
  }

  return(
    <form 
      action=""
      className="col-12"  
      onSubmit={(e) => {
        e.preventDefault();
        setSearchRecipes(search);
        setQuery(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search drinks by ingredient and category</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            type="text"
            name="ingredient"
            className="form-control"
            placeholder="Search for ingredient"
            onChange={handleChange}
            value={ingredient}
          />
        </div>
        <div className="col-md-4">
          <select 
            name="category"
            className="form-control"
            id=""
            onChange={handleChange}
            value={category}
          >
            <option value="">--Select category--</option>
            {categories.map(category => (
              <option 
                key={category.strCategory} 
                // value=""
              >
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <button 
            className="btn btn-block btn-outline-info"
          >
            Search drinks
          </button>
        </div>
      </div>
    </form>
    
  );
}

export default Form;
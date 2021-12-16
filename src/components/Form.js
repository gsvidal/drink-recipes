import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {

  const { categories } = useContext(CategoriesContext);

  return(
    <form 
      action=""
      className="col-12"  
    >
      <fieldset className="text-center">
        <legend>Search drinks by category or ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            type="text"
            name="name"
            className="form-control"
            type="text"
            placeholder="Search for ingredient"
          />
        </div>
        <div className="col-md-4">
          <select 
            name="category"
            className="form-control"
            id=""
          >
            <option value="">--Select category--</option>
            {categories.map(category => (
              <option 
                key={category.strCategory} 
                value=""
              >
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input 
            type="text" 
            className="btn btn-block btn-primary"
            value="Search drinks"
          />
        </div>
      </div>
    </form>
    
  );
}

export default Form;
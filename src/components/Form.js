import React from "react";

const Form = () => {
  return(
    <form 
      action=""
      className="col-12"  
    >
      <fieldset className="text-center">
        <legend>Search drinks by category or ingredient</legend>
      </fieldset>

      <div className="row">
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
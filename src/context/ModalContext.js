import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

  // Provider State
  const [ idRecipe, setIdRecipe ] = useState(null);
  const [ recipe, setRecipe ] = useState({});

  // When we have a recipe, call the API
  useEffect( () => {
    const fetchRecipe = async () => {
      if(!idRecipe) return;
      
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

      const data = await axios.get(url);
      setRecipe(data.data.drinks[0]);
    }
    fetchRecipe();
  },[idRecipe])

  return (
    <ModalContext.Provider
      value={{
        setIdRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
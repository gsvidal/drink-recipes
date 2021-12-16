import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriesContext = createContext();

// Provider is where functions and states are

const CategoriesProvider = (props) => {

  // Create context's state
  const [ categories, setCategories ] = useState([]);

  // API calling with Axios
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const category = await axios.get(url);
      setCategories(category.data.drinks);
    }
    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  )

}

export default CategoriesProvider;
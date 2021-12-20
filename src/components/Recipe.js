import { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    minWidth: 320,
    maxWidth: 520,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({recipe}) => {

  // Set up material-ui modal
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  // Extracting context values
  const { info, setIdRecipe, setInfo } = useContext(ModalContext);

  // Show and give format to ingredients
  const showIngredients = info => {
    let ingredients = [];
    for(let i = 1; i < 16; i++) {
      if(info[`strIngredient${i}`]) {
        ingredients.push(
          <li key={info[`strIngredient${i}`]}>{info[`strIngredient${i}`]} - {info[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredients;
  }

  return (
      <div className="col-md-4 mb-3">
        <div className="card recipe-container">
          <h5 className="card-header recipe-title">{recipe.strDrink}</h5>
          <img className="card-img-top" src={recipe.strDrinkThumb} alt={recipe.strDrink} />
          <div className="card-body">
            <button
              className="btn btn-block btn-info"
              onClick={() => {
                setIdRecipe(recipe.idDrink);
                handleOpen();
              }}
            >
              Read Recipe
            </button>

            <Modal
              open={open}
              onClose={() => {
                handleClose();
                setIdRecipe(null);
                setInfo({})
              }}
            >
              <div 
                style={modalStyle}
                className={classes.paper}
              >
                <h2>{info.strDrink}</h2>
                <h3 className="mt-4">Instructions</h3>
                <p>
                  {info.strInstructions}
                </p>
                <h3>Ingredients</h3>
                <ul>
                  {showIngredients(info)}
                </ul>
                <img className="img-fluid my-4" alt={info.strDrink} src={info.strDrinkThumb} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
  )
}

export default Recipe

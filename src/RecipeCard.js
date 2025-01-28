import "./styles.css";
import "./recipe.css";
import { Fragment, useContext, useState, React } from "react";
import Context from "./context";
import PopUp from "./PopUp";

export default function RecipeCard() {
  const jsonData = useContext(Context);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const showRecipeDetails = (e) => {
    const recipe = e.target.value;
    console.log("recipe", recipe);
    setPopupContent(recipe);
    setShowPopUp(true);
  };

  if (jsonData) {
    if (!jsonData.recipes) return null;
    console.log("update div : ", jsonData.recipes);
    const recipes = jsonData.recipes;
    return (
      <div className="FoodList">
        <br />

        {
          // use data State Variable For Get Data Use JavaScript Map Mathod
          recipes
            ? recipes.map((recipe) => {
                return (
                  <Fragment>
                    <div className="recipes" id={recipe.name}>
                      <h1>{recipe.name}</h1>
                      <img className="image" src={recipe.image} />
                      <button
                        onClick={showRecipeDetails}
                        value={recipe.instructions}
                      >
                        View Recipe
                      </button>
                      {showPopUp && (
                        <PopUp
                          id={`popup-${recipe.name}`}
                          value={recipe.name}
                          showPopUp={showPopUp}
                          closePopUp={() => setShowPopUp(false)}
                        >
                          <div>
                            {popupContent}
                            {/*} <ol>
                              {recipe.instructions.map((instructions) => (
                                <li className="list">{instructions}</li>
                              ))}
                            </ol>*/}
                          </div>
                        </PopUp>
                      )}
                    </div>
                  </Fragment>
                );
              })
            : ""
        }
      </div>
    );
  } else {
    return null;
  }
}

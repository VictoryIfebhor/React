import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Info from "../components/Info";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php";

const Cocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}?i=${id}`);
      const data = await response.json();
      if (data.drinks) {
        setCocktail(data.drinks[0]);
      }
      setCocktail(data.drinks ? data.drinks[0] : null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (cocktail) {
      const ingredientKeys = Object.keys(cocktail).filter((key) => {
        return key.startsWith("strIngredient") && cocktail[key];
      });
      const ingredients = ingredientKeys.map((key) => cocktail[key]);
      setIngredients(ingredients);
    }
  }, [cocktail]);

  return (
    <section className="section cocktail-section">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to="/" className="btn btn-primary">
            back to home page
          </Link>
          <h2 className="section-title">
            {cocktail ? cocktail.strDrink : "No record found"}
          </h2>
          {cocktail && (
            <div className="drink">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <div className="drink-info">
                <Info label="name" value={cocktail.strDrink} />
                <Info label="category" value={cocktail.strCategory} />
                <Info label="type" value={cocktail.strAlcoholic} />
                <Info label="glass" value={cocktail.strGlass} />
                <Info label="instructions" value={cocktail.strInstructions} />
                <Info label="ingredients" value={ingredients.join(", ")} />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Cocktail;

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import RecipePreview from "./components/RecipePreview";
//import recipes from "./Data";

function App() {
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let data = await fetch("http://localhost:3001/api/recipe");
      setRecipes(await data.json());
    };
    getRecipes();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <RecipePreview
            recipeName={recipe.recipeName}
            imageSrc={recipe.imageSrc}
            description={recipe.description}
            route={recipe.route}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

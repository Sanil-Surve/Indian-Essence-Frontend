// import React, { useState } from 'react';
// import { fetchRecipeSuggestions } from '../api/recipeAPI';

// const RecipeForm = ({ setSuggestions }) => {
//   const [ingredients, setIngredients] = useState("");
//   const [preferences, setPreferences] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const ingredientsList = ingredients.split(',').map(item => item.trim());
//     const suggestions = await fetchRecipeSuggestions(ingredientsList, preferences);
//     setSuggestions(suggestions);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ingredients (comma-separated):
//         <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
//       </label>
//       <label>
//         Preferences (e.g., spicy, vegetarian):
//         <input type="text" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
//       </label>
//       <button type="submit">Generate Recipes</button>
//     </form>
//   );
// };

// export default RecipeForm;


import React, { useState } from "react";
import { fetchRecipeSuggestions } from "../api/recipeAPI";

const RecipeForm = ({ setSuggestions }) => {
  const [ingredients, setIngredients] = useState("");
  const [preferences, setPreferences] = useState("");
  const [language, setLanguage] = useState("English"); // New language state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    const suggestions = await fetchRecipeSuggestions(ingredientsList, preferences, language); // Pass language
    setSuggestions(suggestions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingredients (e.g., chicken, paneer):
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <label>
        Preferences (e.g., spicy, sweet):
        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
      </label>
      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Tamil">Tamil</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Bengali">Bengali</option>
        </select>
      </label>
      <button type="submit">Generate Recipes</button>
    </form>
  );
};

export default RecipeForm;
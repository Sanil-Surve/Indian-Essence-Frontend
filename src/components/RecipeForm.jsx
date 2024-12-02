import React, { useState } from 'react';
import { fetchRecipeSuggestions } from '../api/recipeAPI';

const RecipeForm = ({ setSuggestions }) => {
  const [ingredients, setIngredients] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsList = ingredients.split(',').map(item => item.trim());
    const suggestions = await fetchRecipeSuggestions(ingredientsList, preferences);
    setSuggestions(suggestions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingredients (comma-separated):
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </label>
      <label>
        Preferences (e.g., spicy, vegetarian):
        <input type="text" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
      </label>
      <button type="submit">Generate Recipes</button>
    </form>
  );
};

export default RecipeForm;
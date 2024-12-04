// import axios from 'axios';

// export const fetchRecipeSuggestions = async (ingredients, preferences) => {
//   try {
//     const response = await axios.post('https://indian-essence-backend.onrender.com/api/recipes/suggest-recipes', { ingredients, preferences });
//     return response.data.suggestions;
//   } catch (error) {
//     console.error("Error fetching recipe suggestions:", error);
//     throw error;
//   }
// };

import axios from 'axios';

export const fetchRecipeSuggestions = async (ingredients, preferences, language) => {
  try {
    const response = await axios.post(`https://indian-essence-backend.onrender.com/api/recipes/suggest-recipes`, { 
      ingredients, 
      preferences, 
      language // Include language in the request payload
    });
    return response.data.suggestions;
  } catch (error) {
    console.error("Error fetching recipe suggestions:", error);
    throw error;
  }
};
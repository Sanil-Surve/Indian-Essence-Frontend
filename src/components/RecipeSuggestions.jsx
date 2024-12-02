// import React from 'react';

// const RecipeSuggestions = ({ suggestions }) => (
//   <div>
//     <h2>Recipe Suggestions</h2>
//     <pre>{suggestions}</pre>
//   </div>
// );

// export default RecipeSuggestions;

import React from 'react';
import './RecipeSuggestions.css'; // Import the CSS file

const RecipeSuggestions = ({ suggestions }) => (
  <div className="recipe-suggestions">
    <h2>Recipe Suggestions</h2>
    <pre>{suggestions}</pre>
  </div>
);

export default RecipeSuggestions;
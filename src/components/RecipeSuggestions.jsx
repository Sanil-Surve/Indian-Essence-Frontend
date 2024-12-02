import React from 'react';

const RecipeSuggestions = ({ suggestions }) => (
  <div>
    <h2>Recipe Suggestions</h2>
    <pre>{suggestions}</pre>
  </div>
);

export default RecipeSuggestions;
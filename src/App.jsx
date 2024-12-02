import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeSuggestions from './components/RecipeSuggestions';

const App = () => {
  const [suggestions, setSuggestions] = useState("");

  return (
    <div className="App">
      <h1> 😋 The Indian Essence 💯</h1>
      <RecipeForm setSuggestions={setSuggestions} />
      {suggestions && <RecipeSuggestions suggestions={suggestions} />}
    </div>
  );
};

export default App;
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Filter } from './components';
import { AllergiesFilterOptions } from './data';
import { getRecipes } from './API';
import { Landing, Recipes } from './pages';

const App = () => {
  async function fetchRecipes() {
    console.log(1234567897897);
    const response = await getRecipes();
    console.log(response);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/evil" element={<h1>WOWOWOWOWOOWOWO 404</h1>} />
          <Route path="*" element={<Navigate replace to="/evil" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

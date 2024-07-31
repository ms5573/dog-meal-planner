import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Questionnaire from './Questionnaire';
import MealPlan from './MealPlan';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');
  const [dogSize, setDogSize] = useState('');

  const showQuestionnaire = () => setPage('questionnaire');
  const showMealPlan = (size) => {
    setDogSize(size);
    setPage('mealplan');
  };

  return (
    <div className="App">
      {page === 'landing' && <LandingPage onStart={showQuestionnaire} />}
      {page === 'questionnaire' && <Questionnaire onSubmit={showMealPlan} />}
      {page === 'mealplan' && <MealPlan dogSize={dogSize} />}
    </div>
  );
}

export default App;
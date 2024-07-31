import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import LandingPage from './LandingPage';
import Questionnaire from './Questionnaire';
import MealPlanTemplate from './MealPlanTemplate';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');
  const [dogData, setDogData] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);

  const showQuestionnaire = () => setPage('questionnaire');

  const handleQuestionnaireSubmit = (data) => {
    setDogData(data);
    const generatedMealPlan = generateMealPlan(data);
    setMealPlan(generatedMealPlan);
    setPage('mealplan');
  };

  function generateMealPlan(dogData) {
    // This is a simplified example. In a real application, you'd have a more 
    // complex algorithm to determine the best meals based on the dog's needs.
    const mealOptions = {
      small: ['Small Breed Kibble', 'Wet Food for Small Dogs'],
      medium: ['Medium Breed Kibble', 'Mixed Wet and Dry Food'],
      large: ['Large Breed Kibble', 'High-Protein Wet Food'],
    };
    const portionSizes = {
      small: '1/2 cup',
      medium: '1 cup',
      large: '2 cups',
    };
    let baseMeals = mealOptions[dogData.size];
    const portion = portionSizes[dogData.size];

    // Adjust based on age
    if (dogData.age === 'puppy') {
      baseMeals.push('Puppy Growth Formula');
    } else if (dogData.age === 'senior') {
      baseMeals.push('Senior Dog Formula');
    }

    // Adjust based on activity level
    if (dogData.activityLevel === 'high') {
      baseMeals.push('High-Energy Supplement');
    }

    // Adjust for dietary preferences
    if (dogData.dietaryPreferences.includes('grain-free')) {
      baseMeals = baseMeals.filter(meal => !meal.toLowerCase().includes('kibble'));
      baseMeals.push('Grain-Free Alternative');
    }

    return baseMeals.map(meal => ({
      name: meal,
      portion: portion,
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'], // Simplified
    }));
  }

  return (
    <div className="App">
      {page === 'landing' && <LandingPage onStart={showQuestionnaire} />}
      {page === 'questionnaire' && <Questionnaire onSubmit={handleQuestionnaireSubmit} />}
      {page === 'mealplan' && (
        <div>
          <h2>Your Custom Meal Plan is Ready!</h2>
          <PDFDownloadLink
            document={<MealPlanTemplate dogData={dogData} mealPlan={mealPlan} />}
            fileName="dog_meal_plan.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}

export default App;
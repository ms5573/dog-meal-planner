import React from 'react';

function MealPlan({ dogSize }) {
  const pdfUrl = `${dogSize}_dog_meal_plan.pdf`;

  return (
    <div className="meal-plan">
      <h2>Your Dog's Meal Plan</h2>
      <p>Based on your dog's size ({dogSize}), we've generated a meal plan for you.</p>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="button">
        Download Meal Plan (PDF)
      </a>
    </div>
  );
}

export default MealPlan;
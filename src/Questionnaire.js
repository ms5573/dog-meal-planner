import React, { useState } from 'react';

function Questionnaire({ onSubmit }) {
  const [dogSize, setDogSize] = useState('small');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dogSize);
  };

  return (
    <div className="questionnaire">
      <h2>Dog Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dogSize">What is the size of your dog?</label>
        <select
          id="dogSize"
          value={dogSize}
          onChange={(e) => setDogSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Generate Meal Plan</button>
      </form>
    </div>
  );
}

export default Questionnaire;
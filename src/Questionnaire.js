import React, { useState } from 'react';

function Questionnaire({ onSubmit }) {
  const [dogData, setDogData] = useState({
    size: 'medium',
    age: 'adult',
    breed: '',
    activityLevel: 'moderate',
    dietaryPreferences: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDogData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' 
        ? (checked 
          ? [...prevData.dietaryPreferences, value]
          : prevData.dietaryPreferences.filter(item => item !== value))
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dogData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="size" value={dogData.size} onChange={handleChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <select name="age" value={dogData.age} onChange={handleChange}>
        <option value="puppy">Puppy</option>
        <option value="adult">Adult</option>
        <option value="senior">Senior</option>
      </select>

      <input
        type="text"
        name="breed"
        value={dogData.breed}
        onChange={handleChange}
        placeholder="Breed"
      />

      <select name="activityLevel" value={dogData.activityLevel} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>

      <div>
        <label>
          <input
            type="checkbox"
            name="dietaryPreferences"
            value="grain-free"
            checked={dogData.dietaryPreferences.includes('grain-free')}
            onChange={handleChange}
          />
          Grain-free
        </label>
        {/* Add more dietary preference checkboxes as needed */}
      </div>

      <button type="submit">Generate Meal Plan</button>
    </form>
  );
}

export default Questionnaire;
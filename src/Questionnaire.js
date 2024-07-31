import React, { useState } from 'react';

function Questionnaire() {
  const [dogSize, setDogSize] = useState('small');

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(dogSize);
  };

  const generatePDF = (size) => {
    const pdfUrl = `/${size}_dog_meal_plan.pdf`;
    
    // Open the PDF in a new tab
    //window.open(pdfUrl, '_blank');

    // Alternatively, if you want to trigger a download instead:
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${size}_dog_meal_plan.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="questionnaire">
      <h1>Dog Questionnaire</h1>
      <p>What is the size of your dog?</p>
      <form onSubmit={handleSubmit}>
        <select
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
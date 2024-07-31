import React from 'react';

function LandingPage({ onStart }) {
  return (
    <div className="landing-page">
      <h1>OPTIMIZE YOUR DOG'S DIET</h1>
      <h2>DOG MEAL PLANNER</h2>
      <button onClick={onStart}>Get Started</button>
    </div>
  );
}

export default LandingPage;

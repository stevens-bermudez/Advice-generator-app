import React, { useState, useEffect } from 'react';
import './App.css';

const AdviceCard = () => {
  const [adviceId, setAdviceId] = useState('');
  const [adviceText, setAdviceText] = useState('');

  const url = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      const res = await fetch(url);
      const { slip: { id, advice } } = await res.json();
      setAdviceId(id);
      setAdviceText(advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advice-card">
      <div className="card-container">
        <p>Advice #{adviceId}</p>
        <h2>"{adviceText}"</h2>
        <picture>
          <source media="(max-width:500px)" srcSet="../images/pattern-divider-mobile.svg" />
          <img src="../images/pattern-divider-desktop.svg" alt="dice" />
        </picture>
        <button id="generate-btn" onClick={getAdvice}>
          <img src="../images/icon-dice.svg" alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;

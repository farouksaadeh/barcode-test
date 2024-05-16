import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const BabaGhanoush = () => {
  return (
    <div>
      <h1>Baba Ghanoush</h1>
      <p>Baba Ghanoush ist ein traditioneller Dip aus gegrillten oder gerösteten Auberginen, Tahini, Olivenöl, Knoblauch und Gewürzen.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Auberginen</li>
        <li>Tahini</li>
        <li>Olivenöl</li>
        <li>Knoblauch</li>
        <li>Gewürze</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Auberginen grillen oder rösten</li>
        <li>Auberginen mit Tahini, Olivenöl, Knoblauch und Gewürzen pürieren</li>
        <li>Kühl stellen und servieren</li>
      </ol>
      <img src="https://www.oliviascuisine.com/wp-content/uploads/2016/08/baba-ghanoush-feature.jpg" alt="Baba Ghanoush" />
    </div>
  );
};

export default BabaGhanoush;

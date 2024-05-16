import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Hummus = () => {
  return (
    <div>
      <h1>Hummus</h1>
      <p>Hummus ist ein cremiger Dip oder Brotaufstrich aus pürierten Kichererbsen, Tahini, Olivenöl, Zitronensaft, Knoblauch und Gewürzen. Er wird oft mit Fladenbrot oder Gemüse serviert.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Kichererbsen</li>
        <li>Tahini</li>
        <li>Olivenöl</li>
        <li>Zitronensaft</li>
        <li>Knoblauch</li>
        <li>Gewürze</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Kichererbsen mit Tahini, Olivenöl, Zitronensaft, Knoblauch und Gewürzen pürieren</li>
        <li>Kühl stellen und servieren</li>
      </ol>
      <img src="https://essenrezept.de/wp-content/uploads/2021/05/Hummus-Rezept.jpg" alt="Hummus" />
    </div>
  );
};

export default Hummus;

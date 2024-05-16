import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Risotto = () => {
  return (
    <div>
      <h1>Risotto</h1>
      <p>Risotto ist ein cremiges Reisgericht aus Italien, das mit Brühe, Wein, Parmesan und anderen Zutaten zubereitet wird.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Risotto-Reis</li>
        <li>Brühe</li>
        <li>Wein</li>
        <li>Parmesan</li>
        <li>Weitere Zutaten je nach Geschmack (z.B. Pilze, Spargel, Meeresfrüchte)</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Risotto-Reis in Brühe und Wein köcheln lassen, bis der Reis die Flüssigkeit absorbiert hat</li>
        <li>Parmesan hinzufügen und rühren, bis eine cremige Konsistenz entsteht</li>
        <li>Weitere Zutaten je nach Rezept hinzufügen und servieren</li>
      </ol>
      <img src="https://d1bvpoagx8hqbg.cloudfront.net/originals/recette-risotto-aux-champignons-afd1003257c94937589cf51305918abe.jpg" alt="Risotto" />
    </div>
  );
};

export default Risotto;

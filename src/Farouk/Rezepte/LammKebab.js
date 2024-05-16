import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const LammKebab = () => {
  return (
    <div>
      <h1>Lamm-Kebab</h1>
      <p>Lamm-Kebab besteht aus gegrillten oder gebratenen Hackfleischspießen aus Lammfleisch, die mit Gewürzen und Kräutern aromatisiert sind.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Lammfleisch</li>
        <li>Gewürze</li>
        <li>Kräuter</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Lammfleisch würzen und auf Spieße stecken</li>
        <li>Grillen oder braten, bis es durchgegart ist</li>
        <li>Servieren und genießen</li>
      </ol>
      <img src="https://www.carolinescooking.com/wp-content/uploads/2021/04/lamb-shish-kebab-featured-pic-sq-2.jpg" alt="Lamm-Kebab" />
    </div>
  );
};

export default LammKebab;

import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Falafel = () => {
  return (
    <div>
      <h1>Falafel</h1>
      <p>Falafel sind frittierte Bällchen aus pürierten Kichererbsen oder Bohnen, die mit Kräutern und Gewürzen gewürzt sind. Sie werden oft in Pita-Brot mit Gemüse und Tahini-Sauce serviert.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Kichererbsen</li>
        <li>Kräuter</li>
        <li>Gewürze</li>
        <li>Pita-Brot</li>
        <li>Gemüse</li>
        <li>Tahini-Sauce</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Kichererbsen mit Kräutern und Gewürzen pürieren</li>
        <li>Zu Bällchen formen und frittieren</li>
        <li>In Pita-Brot mit Gemüse und Tahini-Sauce servieren</li>
      </ol>
      <img src="https://www.ecoidee.it/wp-content/uploads/2018/04/195.jpg" alt="Falafel" />
    </div>
  );
};

export default Falafel;

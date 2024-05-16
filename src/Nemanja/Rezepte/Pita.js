import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Pita = () => {
  return (
    <div>
      <h1>Pita</h1>
      <p>Pita ist ein traditionelles serbisches Gericht, das aus dünnem Teig und verschiedenen Füllungen wie Fleisch, Käse oder Gemüse besteht.</p>
      <h2>Zutaten für den Teig:</h2>
      <ul>
        <li>500 g Mehl</li>
        <li>1 TL Salz</li>
        <li>1 TL Backpulver</li>
        <li>250 ml Wasser</li>
        <li>4 EL Öl</li>
      </ul>
      <h2>Zutaten für die Füllung (Beispiel Fleischfüllung):</h2>
      <ul>
        <li>500 g Hackfleisch</li>
        <li>1 Zwiebel, gehackt</li>
        <li>2 Knoblauchzehen, gehackt</li>
        <li>Gewürze nach Geschmack (Paprika, Pfeffer, Salz)</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Den Teig aus Mehl, Salz, Backpulver, Wasser und Öl herstellen und ruhen lassen.</li>
        <li>Die Füllung vorbereiten und würzen.</li>
        <li>Den Teig dünn ausrollen und die Füllung darauf verteilen.</li>
        <li>Die Pita aufrollen und im Ofen backen, bis sie goldbraun ist.</li>
      </ol>
      <img src="https://nomadparadise.com/wp-content/uploads/2019/11/bosnianfood_04.jpg" alt="Pita" />
    </div>
  );
};

export default Pita;

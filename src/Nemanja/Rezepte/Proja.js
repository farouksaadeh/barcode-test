import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Proja = () => {
  return (
    <div>
      <h1>Proja</h1>
      <p>Proja ist ein serbisches Maisbrot, das traditionell als Beilage zu Fleischgerichten oder als Snack serviert wird.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>500 g Maismehl</li>
        <li>250 g Mehl</li>
        <li>500 ml Joghurt</li>
        <li>250 ml Wasser</li>
        <li>1 Päckchen Backpulver</li>
        <li>Salz nach Geschmack</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Alle Zutaten zu einem Teig vermengen.</li>
        <li>Den Teig in eine gefettete Backform geben.</li>
        <li>Im vorgeheizten Ofen bei 180°C etwa 30-40 Minuten backen, bis die Proja goldbraun ist.</li>
        <li>Aus dem Ofen nehmen und abkühlen lassen, bevor sie in Quadrate geschnitten wird.</li>
      </ol>
      <img src="https://www.kurir.rs/data/images/2017/03/25/00/1139361_seljacka-proja-recept_share.jpg" alt="Proja" />
    </div>
  );
};

export default Proja;

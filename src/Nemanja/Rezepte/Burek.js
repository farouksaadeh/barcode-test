import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Burek = () => {
  return (
    <div>
      <h1>Burek</h1>
      <p>Burek ist eine traditionelle serbische Teigspeise, die mit Fleisch, Käse oder Gemüse gefüllt ist und in Schichten gebacken wird.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>500 g Filoteig oder Blätterteig</li>
        <li>300 g Hackfleisch oder Käse (je nach Füllung)</li>
        <li>1 Zwiebel, gehackt</li>
        <li>Salz und Pfeffer nach Geschmack</li>
        <li>Öl zum Bestreichen</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Die Füllung vorbereiten und würzen.</li>
        <li>Den Filoteig in dünnen Schichten auslegen und jeweils mit Öl bestreichen.</li>
        <li>Die Füllung auf den Teig geben und den Teig aufrollen.</li>
        <li>Den Burek auf ein Backblech legen und im vorgeheizten Ofen bei 180°C etwa 30-40 Minuten backen, bis er goldbraun ist.</li>
        <li>Heiß servieren.</li>
      </ol>
      <img src="https://cdn.karar.com/news/1497684.jpg" alt="Burek" />
    </div>
  );
};

export default Burek;

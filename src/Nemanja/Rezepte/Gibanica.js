import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Gibanica = () => {
  return (
    <div>
      <h1>Gibanica</h1>
      <p>Gibanica ist ein traditioneller serbischer Käsekuchen mit Schichten aus Filoteig und Käse.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>500 g Filoteig</li>
        <li>300 g Feta-Käse, zerbröckelt</li>
        <li>200 g geriebener Käse (Gouda oder Emmentaler)</li>
        <li>4 Eier</li>
        <li>200 ml saure Sahne</li>
        <li>100 ml Mineralwasser</li>
        <li>Salz und Pfeffer nach Geschmack</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Den Ofen auf 180°C vorheizen und eine Backform einfetten.</li>
        <li>Die Eier in einer Schüssel verquirlen und saure Sahne, Mineralwasser, Salz und Pfeffer hinzufügen.</li>
        <li>Die Filoteigblätter in die Form legen, dabei jede Schicht mit der Ei-Mischung bestreichen und abwechselnd mit Feta-Käse und geriebenem Käse belegen.</li>
        <li>Die Gibanica etwa 30-40 Minuten backen, bis sie goldbraun und knusprig ist.</li>
        <li>Vor dem Servieren etwas abkühlen lassen und in Stücke schneiden.</li>
      </ol>
      <img src="https://www.thespruceeats.com/thmb/3ejDDtStAsWvep_poJa12TmkdV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-salty-serbian-gibanica-1135905-hero-8baa62be52ec49d9b9dcf0d7fb889b9a.jpg" alt="Gibanica" />
    </div>
  );
};

export default Gibanica;

import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Sarma = () => {
  return (
    <div>
      <h1>Sarma</h1>
      <p>Sarma sind gefüllte Weinblätter, die traditionell mit Hackfleisch, Reis und Gewürzen gefüllt und mit Sauerkraut oder Tomatensoße serviert werden.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>1 Glas eingelegte Weinblätter</li>
        <li>500 g Hackfleisch</li>
        <li>1 Zwiebel, gehackt</li>
        <li>1 Tasse Reis</li>
        <li>Gewürze nach Geschmack (Paprika, Pfeffer, Salz)</li>
        <li>1 Glas Sauerkraut oder Tomatensoße</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Die Weinblätter vorsichtig abspülen und trocken tupfen.</li>
        <li>Die Füllung aus Hackfleisch, Zwiebeln, Reis und Gewürzen zubereiten.</li>
        <li>Die Weinblätter mit der Füllung füllen und zu kleinen Röllchen formen.</li>
        <li>Die Sarma in einen Topf legen und mit Sauerkraut oder Tomatensoße bedecken.</li>
        <li>Etwa 1-2 Stunden köcheln lassen, bis die Sarma weich sind.</li>
        <li>Heiß servieren.</li>
      </ol>
      <img src="https://cms-receitadevovo-gallery.s3.us-east-2.amazonaws.com/recipes/2022/02/Trouxinha-de-repolho-com-carne-moida.png" alt="Sarma" />
    </div>
  );
};

export default Sarma;

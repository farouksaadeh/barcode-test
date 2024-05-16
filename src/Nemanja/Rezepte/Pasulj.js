import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';


const Pasulj = () => {
  return (
    <div>
      <h1>Pasulj</h1>
      <p>Pasulj ist ein traditionelles serbisches Bohnengericht, das oft mit geräuchertem Fleisch, Gemüse und Gewürzen zubereitet wird.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>500 g weiße Bohnen</li>
        <li>200 g geräucherter Speck oder Speckwürfel</li>
        <li>1 Zwiebel, gehackt</li>
        <li>2 Knoblauchzehen, gehackt</li>
        <li>2 Lorbeerblätter</li>
        <li>1 TL Paprikapulver</li>
        <li>Salz und Pfeffer nach Geschmack</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Die Bohnen über Nacht einweichen und am nächsten Tag abspülen.</li>
        <li>In einem Topf die Bohnen mit ausreichend Wasser zum Kochen bringen.</li>
        <li>Den geräucherten Speck, Zwiebeln, Knoblauch, Lorbeerblätter und Gewürze hinzufügen und köcheln lassen, bis die Bohnen weich sind.</li>
        <li>Das Gericht heiß servieren.</li>
      </ol>
      <img src="https://i.pinimg.com/originals/9a/48/d0/9a48d0f95e9107e8b021d1ef595cf6c1.jpg" alt="Pasulj" />
    </div>
  );
};

export default Pasulj;

import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Lasagne = () => {
  return (
    <div>
      <h1>Lasagne</h1>
      <p>Lasagne ist ein klassisches italienisches Nudelgericht, das aus geschichteten Nudeln, Bolognese-Sauce, Bechamelsauce und Käse besteht.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Lasagne-Nudeln</li>
        <li>Bolognese-Sauce</li>
        <li>Bechamelsauce</li>
        <li>Käse</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Lasagne-Nudeln kochen</li>
        <li>Abwechselnd Bolognese-Sauce, Nudeln, Bechamelsauce und Käse in eine Auflaufform schichten</li>
        <li>Im Ofen backen, bis die Oberfläche goldbraun ist</li>
        <li>Aus dem Ofen nehmen, kurz abkühlen lassen und servieren</li>
      </ol>
      <img src="https://www.myfoodom.com/wp-content/uploads/2020/03/Copy-of-Untitled-10.jpg" alt="Lasagne" />
    </div>
  );
};

export default Lasagne;

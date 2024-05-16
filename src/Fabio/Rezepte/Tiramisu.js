import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const Tiramisu = () => {
  return (
    <div>
      <h1>Tiramisu</h1>
      <p>Tiramisu ist ein klassisches italienisches Dessert aus Löffelbiskuits, Kaffee, Mascarpone, Eiern, Zucker und Kakao.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Löffelbiskuits</li>
        <li>Kaffee</li>
        <li>Mascarpone</li>
        <li>Eier</li>
        <li>Zucker</li>
        <li>Kakao</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Löffelbiskuits in Kaffee tränken und in eine Auflaufform schichten</li>
        <li>Mascarpone-Creme darüber verteilen</li>
        <li>Mit einer weiteren Schicht Löffelbiskuits und Mascarpone-Creme abschließen</li>
        <li>Mit Kakao bestäuben und kalt stellen</li>
        <li>Vor dem Servieren in Stücke schneiden und genießen</li>
      </ol>
      <img src="https://www.simplyrecipes.com/thmb/n29cy_Z8pl8r8Au-MpA1Lp08kdg=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__10__2017-10-28-Tiramisu-21-7de4673191d542039f47927fde4fee82.jpg" alt="Tiramisu" />
    </div>
  );
};

export default Tiramisu;

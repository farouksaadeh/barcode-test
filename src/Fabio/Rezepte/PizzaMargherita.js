import React from 'react';
import '../../GlobalCss/GlobalRezepte.css';

const PizzaMargherita = () => {
  return (
    <div>
      <h1>Pizza Margherita</h1>
      <p>Die Pizza Margherita ist eine klassische italienische Pizza mit Tomatensauce, Mozzarella und Basilikum.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Pizzateig</li>
        <li>Tomatensauce</li>
        <li>Mozzarella</li>
        <li>Basilikum</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Pizzateig ausrollen und mit Tomatensauce bestreichen</li>
        <li>Mozzarella darüber verteilen</li>
        <li>Im Ofen backen, bis der Käse geschmolzen und der Teig knusprig ist</li>
        <li>Mit frischem Basilikum garnieren und servieren</li>
      </ol>
      <img src="https://th.bing.com/th/id/R.9e0caa8628009f5bb525d1e09604fda9?rik=dI0nOfBy3ahp1w&riu=http%3a%2f%2fvitaitaliantours.com%2fwp-content%2fuploads%2f2016%2f03%2fNeapolitan-Pizza-Margherita.jpg&ehk=Rk%2bfgzpAHbGig6ZHOExH6bwW62dG29BR4XPCsHqKBSI%3d&risl=1&pid=ImgRaw&r=0" alt="Pizza Margherita" />
    </div>
  );
};

export default PizzaMargherita;

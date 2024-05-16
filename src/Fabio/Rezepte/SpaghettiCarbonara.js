// Detailseite für Spaghetti Carbonara (Beispiel)
import React from 'react';
import '../../GlobalCss/GlobalRezepte.css'; // Importieren der CSS-Datei

const SpaghettiCarbonara = () => {
  // Hier kommen alle Informationen über das Rezept
  return (
    <div>
      <h1>Spaghetti Carbonara</h1>
      <p>Ein klassisches italienisches Gericht mit Spaghetti, Ei, Guanciale und Pecorino Romano.</p>
      <h2>Zutaten:</h2>
      <ul>
        <li>Spaghetti</li>
        <li>Ei</li>
        <li>Guanciale</li>
        <li>Pecorino Romano</li>
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        <li>Spaghetti kochen</li>
        <li>Ei und Guanciale anbraten</li>
        <li>Alles vermischen und servieren</li>
      </ol>
      <img src="https://cdn-cas.orami.co.id/parenting/original_images/easy_spaghetti_carbonara.jpg" alt="Spaghetti Carbonara" />
    </div>
  );
};

export default SpaghettiCarbonara;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Italienisch from './Fabio/italienisch';
import Arabisch from './Farouk/arabisch';
import Serbisch from './Nemanja/serbisch';

// Importiere die neuen Rezepte-Komponenten für die italienische Küche

import SpaghettiCarbonara from './Fabio/Rezepte/SpaghettiCarbonara';
import PizzaMargherita from './Fabio/Rezepte/PizzaMargherita';
import Risotto from './Fabio/Rezepte/Risotto';
import Tiramisu from './Fabio/Rezepte/Tiramisu';
import Lasagne from './Fabio/Rezepte/Lasagne';

// Importiere die neuen Rezepte-Komponenten für die arabische Küche
import BabaGhanoush from './Farouk/Rezepte/BabaGhanoush';
import Kibbeh from './Farouk/Rezepte/Kibbeh';
import LammKebab from './Farouk/Rezepte/LammKebab';
import Linsensuppe from './Farouk/Rezepte/Linsensuppe';
import Lahmacun from './Farouk/Rezepte/Lahmacun';
import Manakish from './Farouk/Rezepte/Manakish';
import Falafel from './Farouk/Rezepte/Falafel';
import Tabbouleh from './Farouk/Rezepte/Tabbouleh';
import Hummus from './Farouk/Rezepte/Hummus';
import Fattoush from './Farouk/Rezepte/Fattoush';
import ShishTaouk from './Farouk/Rezepte/ShishTaouk';
import Kunafa from './Farouk/Rezepte/Kunafa';

// Importiere die neuen Rezepte-Komponenten für die serbische Küche
import Ajvar from './Nemanja/Rezepte/Ajvar';
import Burek from './Nemanja/Rezepte/Burek';
import Cevapi from './Nemanja/Rezepte/Cevapi';
import Gibanica from './Nemanja/Rezepte/Gibanica';
import Kajmak from './Nemanja/Rezepte/Kajmak';
import Pasulj from './Nemanja/Rezepte/Pasulj';
import Pita from './Nemanja/Rezepte/Pita';
import Pleskavica from './Nemanja/Rezepte/Pleskavica';
import Proja from './Nemanja/Rezepte/Proja';
import Sarma from './Nemanja/Rezepte/Sarma';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/italienisch" element={<Italienisch />} />
        <Route path="/arabisch" element={<Arabisch />} />
        <Route path="/serbisch" element={<Serbisch />} />

        {/* Italienisch */}
        <Route path="/italienisch/spaghetti-carbonara" element={<SpaghettiCarbonara />} />
        <Route path="/italienisch/pizza-margherita" element={<PizzaMargherita />} />
        <Route path="/italienisch/risotto" element={<Risotto />} />
        <Route path="/italienisch/tiramisu" element={<Tiramisu />} />
        <Route path="/italienisch/lasagne" element={<Lasagne />} />

        {/* Arabisch */}
        <Route path="/arabisch/baba-ghanoush" element={<BabaGhanoush />} />
        <Route path="/arabisch/kibbeh" element={<Kibbeh />} />
        <Route path="/arabisch/lamm-kebab" element={<LammKebab />} />
        <Route path="/arabisch/linsensuppe" element={<Linsensuppe />} />
        <Route path="/arabisch/lahmacun" element={<Lahmacun />} />
        <Route path="/arabisch/manakish" element={<Manakish />} />
        <Route path="/arabisch/falafel" element={<Falafel />} />
        <Route path="/arabisch/tabbouleh" element={<Tabbouleh />} />
        <Route path="/arabisch/hummus" element={<Hummus />} />
        <Route path="/arabisch/fattoush" element={<Fattoush />} />
        <Route path="/arabisch/shish-taouk" element={<ShishTaouk />} />
        <Route path="/arabisch/kunafa" element={<Kunafa />} />

        {/* Serbisch */}
        <Route path="/serbisch/ajvar" element={<Ajvar />} />
        <Route path="/serbisch/burek" element={<Burek />} />
        <Route path="/serbisch/cevapi" element={<Cevapi />} />
        <Route path="/serbisch/gibanica" element={<Gibanica />} />
        <Route path="/serbisch/kajmak" element={<Kajmak />} />
        <Route path="/serbisch/pasulj" element={<Pasulj />} />
        <Route path="/serbisch/pita" element={<Pita />} />
        <Route path="/serbisch/pleskavica" element={<Pleskavica />} />
        <Route path="/serbisch/proja" element={<Proja />} />
        <Route path="/serbisch/sarma" element={<Sarma />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

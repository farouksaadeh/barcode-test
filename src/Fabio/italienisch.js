import React from 'react';
import QRCode from 'qrcode.react';
import '../GlobalCss/GlobalCss.css';

const Italienisch = () => {
  const rezepte = [
      {
        "name": "Lasagne",
        "description": "Ein traditionelles italienisches Gericht, bestehend aus geschichteten Nudeln, Hackfleischsauce und Käse.",
        "image": "https://www.myfoodom.com/wp-content/uploads/2020/03/Copy-of-Untitled-10.jpg",
        "qrCode": "https://barcode-test-tan.vercel.app//italienisch/lasagne"
      },
      {
        "name": "Pizza Margherita",
        "description": "Eine traditionelle italienische Pizza mit Tomatensauce, Mozzarella und Basilikum.",
        "image": "https://th.bing.com/th/id/R.9e0caa8628009f5bb525d1e09604fda9?rik=dI0nOfBy3ahp1w&riu=http%3a%2f%2fvitaitaliantours.com%2fwp-content%2fuploads%2f2016%2f03%2fNeapolitan-Pizza-Margherita.jpg&ehk=Rk%2bfgzpAHbGig6ZHOExH6bwW62dG29BR4XPCsHqKBSI%3d&risl=1&pid=ImgRaw&r=0",
        "qrCode": "https://barcode-test-tan.vercel.app//italienisch/pizza-margherita"
      },
      {
        "name": "Risotto",
        "description": "Ein cremiges Reisgericht aus Italien, das je nach Variation verschiedene Zutaten wie Pilze, Gemüse oder Meeresfrüchte enthalten kann.",
        "image": "https://d1bvpoagx8hqbg.cloudfront.net/originals/recette-risotto-aux-champignons-afd1003257c94937589cf51305918abe.jpg",
        "qrCode": "https://barcode-test-tan.vercel.app//italienisch/risotto"
      },
      {
        "name": "Spaghetti Carbonara",
        "description": "Ein klassisches italienisches Gericht mit Spaghetti, Ei, Guanciale und Pecorino Romano.",
        "image": "https://cdn-cas.orami.co.id/parenting/original_images/easy_spaghetti_carbonara.jpg",
        "qrCode": "https://barcode-test-tan.vercel.app//italienisch/spaghetti-carbonara"
      },
      {
        "name": "Tiramisu",
        "description": "Ein klassisches italienisches Dessert aus Löffelbiskuits, Mascarpone, Kaffee und Kakao.",
        "image": "https://www.simplyrecipes.com/thmb/n29cy_Z8pl8r8Au-MpA1Lp08kdg=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__10__2017-10-28-Tiramisu-21-7de4673191d542039f47927fde4fee82.jpg",
        "qrCode": "https://barcode-test-tan.vercel.app//italienisch/tiramisu"
      }
    
    
    // Fügen Sie hier weitere Rezepte hinzu...
  ];

  return (
    <div className="rezepte-container">
      {rezepte.map((rezept, index) => (
        <div key={index} className="Rezept">
          <img src={rezept.image} alt={rezept.name} />
          <h2>{rezept.name}</h2>
          <p>{rezept.description}</p>
          <QRCode value={rezept.qrCode} />
        </div>
      ))}
    </div>
  );
};

export default Italienisch;

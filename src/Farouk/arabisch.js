import React from 'react';
import QRCode from 'qrcode.react';
import '../GlobalCss/GlobalCss.css'; // Importieren der CSS-Datei

const Arabisch = () => {
  const rezepte = [
    {
      name: "Baba Ghanoush",
      description: "Baba Ghanoush ist ein traditioneller Dip aus gegrillten oder gerösteten Auberginen, Tahini, Olivenöl, Knoblauch und Gewürzen.",
      image: "https://www.oliviascuisine.com/wp-content/uploads/2016/08/baba-ghanoush-feature.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/baba-ghanoush"
    },
    {
      name: "Kibbeh",
      description: "Kibbeh ist ein beliebtes libanesisches Gericht aus Hackfleisch, Bulgur, Zwiebeln und Gewürzen. Es kann gebacken, frittiert oder roh serviert werden.",
      image: "https://th.bing.com/th/id/R.892e1015064f38d26b897301830c9249?rik=er1xNlr7%2fP41Yw&riu=http%3a%2f%2fwww.onearabvegan.com%2fwp-content%2fuploads%2f2017%2f06%2fvegan-pumpkin-kibbeh-10.jpg&ehk=qD2YAnqDfjNdqr5Hn4qfwuRLTWMgFXtU5n7yhtcG4PA%3d&risl=&pid=ImgRaw&r=0",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/kibbeh"
    },
    {
      name: "Lamm-Kebab",
      description: "Lamm-Kebab besteht aus gegrillten oder gebratenen Hackfleischspießen aus Lammfleisch, die mit Gewürzen und Kräutern aromatisiert sind.",
      image: "https://www.carolinescooking.com/wp-content/uploads/2021/04/lamb-shish-kebab-featured-pic-sq-2.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/lamm-kebab"
    },
    {
      name: "Linsensuppe",
      description: "Linsensuppe ist eine herzhafte Suppe aus Linsen, Gemüse, Tomaten, Knoblauch und Gewürzen. Sie wird oft mit Zitronensaft beträufelt und mit Fladenbrot serviert.",
      image: "https://caterringflex.cdnflexcatering.com/media/images/large/ec905ade8e783dc8e55223bf6475f10e.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/linsensuppe"
    },
    {
      name: "Lahmacun",
      description: "Lahmacun ist eine Art türkische Pizza, die auch in der libanesischen Küche beliebt ist. Sie besteht aus einem dünnen Fladenbrot, das mit einer Mischung aus Hackfleisch, Tomaten, Paprika und Gewürzen belegt wird.",
      image: "https://th.bing.com/th/id/OIP.yB3PvTLM_a4jmj8zpDJ0VwHaF7?rs=1&pid=ImgDetMain",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/lahmacun"
    },
    {
      name: "Manakish",
      description: "Manakish sind libanesische Fladenbrote, die mit einer Vielzahl von Belägen wie Thymian, Sesam, Käse oder Hackfleisch belegt werden. Sie werden oft zum Frühstück oder als Snack gegessen.",
      image: "https://s3-us-west-2.amazonaws.com/mfcollectnew/ChIJZSVMx4cp3YAR35-dEic--SE/iEML8MGMIW.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/manakish"
    },
    {
      name: "Falafel",
      description: "Falafel sind frittierte Bällchen aus pürierten Kichererbsen oder Bohnen, die mit Kräutern und Gewürzen gewürzt sind. Sie werden oft in Pita-Brot mit Gemüse und Tahini-Sauce serviert.",
      image: "https://www.ecoidee.it/wp-content/uploads/2018/04/195.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/falafel"
    },
    {
      name: "Tabbouleh",
      description: "Tabbouleh ist ein erfrischender Salat aus fein gehacktem Petersilie, Tomaten, Minze, Zwiebeln, Bulgur und Zitronensaft. Er wird oft als Vorspeise oder Beilage serviert.",
      image: "https://3.bp.blogspot.com/-qQXpWci_CKk/W6vjI0kUi9I/AAAAAAAA9gc/sNDxa1geEcQzQAbDmv3KVgHqBK9tTYPKwCLcBGAs/s1600/fresh-light-authentic-lebanese-tabbouleh.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/tabbouleh"
    },
    {
      name: "Hummus",
      description: "Hummus ist ein cremiger Dip oder Brotaufstrich aus pürierten Kichererbsen, Tahini, Olivenöl, Zitronensaft, Knoblauch und Gewürzen. Er wird oft mit Fladenbrot oder Gemüse serviert.",
      image: "https://essenrezept.de/wp-content/uploads/2021/05/Hummus-Rezept.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/hummus"
    },
    {
      name: "Fattoush",
      description: "Fattoush ist ein knackiger Salat aus gemischtem Gemüse wie Tomaten, Gurken, Radieschen und Römersalat, der mit geröstetem Fladenbrot und einer Zitronen-Vinaigrette serviert wird.",
      image: "https://th.bing.com/th/id/R.8f64823fadcba1f4f48244acf4bc3edb?rik=7ovNeY%2bXsQt1Mw&pid=ImgRaw&r=0",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/fattoush"
    },
    {
      name: "Shish Taouk",
      description: "Shish Taouk sind gegrillte Hähnchenspieße, die mit einer Marinade aus Joghurt, Zitronensaft, Knoblauch, Paprika und Gewürzen gewürzt sind. Sie werden oft mit Reis oder Fladenbrot serviert.",
      image: "https://th.bing.com/th/id/R.498ea9726e44e6745e58a485e11abc2b?rik=H5PiQNUO508nXQ&riu=http%3a%2f%2fmillasmat.com%2ffileadmin%2fbilder%2fmiddag%2fshish-taouk.jpg&ehk=u7YZOMOeJbj5ziS7QTHrWEaGKyVAF96DVfBafvdrpvI%3d&risl=&pid=ImgRaw&r=0",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/shish-taouk"
    },
    {
      name: "Kunafa",
      description: "Kunafa ist ein süßes Dessert aus verstrudelten Teigfäden, die mit einer Füllung aus Käse, Pistazien oder Nüssen gefüllt und mit Zuckersirup beträufelt werden.",
      image: "https://th.bing.com/th/id/OIP.8k0Ob4ysXObTZnFLBXnvlgHaE8?rs=1&pid=ImgDetMain",
      qrCode: "https://barcode-test-ochre.vercel.app///arabisch/kunafa"
    }
    
    // Fügen Sie hier die restlichen Rezepte hinzu...
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

export default Arabisch;

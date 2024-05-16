import React from 'react';
import QRCode from 'qrcode.react';
import '../GlobalCss/GlobalCss.css';

const Serbisch = () => {
  const rezepte = [
    {
      name: "Ćevapi",
      description: "Ćevapi sind traditionelle serbische Würstchen aus gemischtem Hackfleisch, oft mit Zwiebeln und Paprika serviert.",
<<<<<<< HEAD
      image: "https://th.bing.com/th/id/R.0ea90b2486aa803a2f07976c933dfa68?rik=bbtnwyzMn6UHxA&pid=ImgRaw&r=0",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/cevapi"
=======
      image: "url-zum-bild-cevapi.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/cevapi"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Pljeskavica",
      description: "Pljeskavica ist ein serbisches Burger-Patty aus gemahlenem Fleisch, oft serviert mit Kajmak, Zwiebeln und Ajvar in einem Brot.",
<<<<<<< HEAD
      image: "https://lh3.googleusercontent.com/ET8qj9I6Y7h1OPUCPwbNyR9jKjTmXGHu4YslyYQgCBlrDiYV54uN1xqGrIrvzTaKDmtc0RgdCZFwXDaLlbpBfPDn3Ru4L_4VdU1Otg=w900-l68",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/pljeskavica"
=======
      image: "url-zum-bild-pljeskavica.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/pljeskavica"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Gibanica",
      description: "Gibanica ist ein serbischer Käsekuchen aus Schichten von Filoteig und Käse, oft mit Eiern und Sauerrahm vermischt.",
<<<<<<< HEAD
      image: "https://www.thespruceeats.com/thmb/3ejDDtStAsWvep_poJa12TmkdV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-salty-serbian-gibanica-1135905-hero-8baa62be52ec49d9b9dcf0d7fb889b9a.jpg",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/gibanica"
=======
      image: "url-zum-bild-gibanica.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/gibanica"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Ajvar",
      description: "Ajvar ist eine serbische Paprika-Paste aus gerösteten Paprika, Knoblauch, Auberginen und Gewürzen.",
<<<<<<< HEAD
      image: "https://th.bing.com/th/id/OIP.KocmXSwZBHc_ocCWQB8DsgHaFj?rs=1&pid=ImgDetMain",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/ajvar"
=======
      image: "url-zum-bild-ajvar.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/ajvar"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Sarma",
      description: "Sarma sind serbische Kohlrouladen, gefüllt mit Hackfleisch, Reis und Gewürzen, oft in einer Tomatensoße gekocht.",
<<<<<<< HEAD
      image: "https://cms-receitadevovo-gallery.s3.us-east-2.amazonaws.com/recipes/2022/02/Trouxinha-de-repolho-com-carne-moida.png",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/sarma"
=======
      image: "url-zum-bild-sarma.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/sarma"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Burek",
      description: "Burek ist ein serbisches Blätterteiggebäck, gefüllt mit Fleisch, Käse, Kartoffeln oder Spinat.",
<<<<<<< HEAD
      image: "https://cdn.karar.com/news/1497684.jpg",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/burek"
=======
      image: "url-zum-bild-burek.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/burek"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Kajmak",
      description: "Kajmak ist ein serbischer cremiger Frischkäse, der aus aufgekochter Milch hergestellt wird und oft zu Fleischgerichten serviert wird.",
<<<<<<< HEAD
      image: "https://www.thespruceeats.com/thmb/k8p2YSDzxFUTxY7yU6D-LEqgBKQ=/3200x2061/filters:fill(auto,1)/traditional-serbian-kajmak-recipe-1135791-hero-01-4cfbd4a92cbd4dce83ae0ade3d221069.jpg",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/kajmak"
=======
      image: "url-zum-bild-kajmak.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/kajmak"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Pasulj",
      description: "Pasulj ist ein serbischer Bohneneintopf, oft mit weißem Bohnen, Fleisch und Gemüse zubereitet.",
<<<<<<< HEAD
      image: "https://i.pinimg.com/originals/9a/48/d0/9a48d0f95e9107e8b021d1ef595cf6c1.jpg",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/pasulj"
=======
      image: "url-zum-bild-pasulj.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/pasulj"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Proja",
      description: "Proja ist ein serbischer Maisbrot, das mit Maismehl, Mehl, Joghurt und Käse zubereitet wird.",
<<<<<<< HEAD
      image: "https://www.kurir.rs/data/images/2017/03/25/00/1139361_seljacka-proja-recept_share.jpg",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/proja"
=======
      image: "url-zum-bild-proja.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/proja"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    {
      name: "Pita",
      description: "Pita ist ein serbisches Teiggebäck, das mit verschiedenen Füllungen wie Hackfleisch, Käse oder Gemüse zubereitet wird.",
<<<<<<< HEAD
      image: "https://nomadparadise.com/wp-content/uploads/2019/11/bosnianfood_04.jpg",
      qrCode: "https://barcode-test-tan.vercel.app//serbisch/pita"
=======
      image: "url-zum-bild-pita.jpg",
      qrCode: "https://barcode-test-ochre.vercel.app///serbisch/pita"
>>>>>>> fc8ca2c3a1d2efe1349baffb5d40d30e3aedc5b9
    },
    // Weitere Rezepte können hier hinzugefügt werden...
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

export default Serbisch;

// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './LandingPage.css'; // Importieren der LandingPage.css

const LandingPage = () => {
  const italienischQR = "https://barcode-test-ochre.vercel.app//italienisch";
  const arabischQR = "https://barcode-test-ochre.vercel.app//arabisch";
  const serbischQR = "https://barcode-test-ochre.vercel.app//serbisch";

  return (
    <div className="landingPage">
      <h1>Willkommen auf unserer Rezeptseite!</h1>
      <h2>Scannen Sie die QR-Codes, um direkt zu den Kategorien zu gelangen:</h2>
      <div className="QRCodeContainer">
        <div className="QRCodeWrapper">
          <QRCode value={italienischQR} />
          <Link to="/italienisch" className="QRCodeButton">Weiter zu Italienischen Gerichten</Link>
        </div>
        <div className="QRCodeWrapper">
          <QRCode value={arabischQR} />
          <Link to="/arabisch" className="QRCodeButton">Weiter zu Arabischen Gerichten</Link>
        </div>
        <div className="QRCodeWrapper">
          <QRCode value={serbischQR} />
          <Link to="/serbisch" className="QRCodeButton">Weiter zu Serbischen Gerichten</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

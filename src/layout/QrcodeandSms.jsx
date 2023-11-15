
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Qrcode from '../images/qrcode.jpg'

const QRCodePage = () => {
  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateQRCode = () => {
  
    setQRCodeValue(text);
  };

  return (
    <div className='md:flex'>
    <div className="bg-white min-h-auto md:p-5  md:h-screen lg:h-screen xl:h-screen ">
      <div className="bg-white p-8 rounded h-screen  w-full md:w-full lg:w-full xl:w-full">
        <h2 className="text-2xl font-extrabold font-sans mb-4">Generate QR Code</h2>

        <label className="block mb-2" htmlFor="qrCodeText">
          Text to Encode:
        </label>
        <input
          type="text"
          id="qrCodeText"
          className="w-full px-3 py-2 border rounded mb-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="bg-fuchsia-700 text-white py-2 px-4 rounded hover:bg-fuchsia-900"
          onClick={generateQRCode}
        >
          Generate QR Code
        </button>

        {qrCodeValue && (
          <div className="mt-4">
            <QRCode value={qrCodeValue} />
          </div>
        )}
      </div>
    </div>
    <div className='ml-10 mt-5'>
    <img src={Qrcode} alt='' height='320px' width="400px"/>

    </div>
    </div>
  );
};

export default QRCodePage;

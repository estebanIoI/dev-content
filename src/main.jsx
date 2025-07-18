import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Preloader from './components/Preloader.jsx';
import './index.css';

const Main = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderFinished = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Preloader onFinished={handlePreloaderFinished} />
      ) : (
        <App />
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
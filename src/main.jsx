
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const gakucodeInfo = {
  name: "gakucode",
  age: 26,
};

const GakuCodeContext = createContext(gakucodeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GakuCodeContext.Provider value={gakucodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GakuCodeContext.Provider>
);

export default GakuCodeContext;
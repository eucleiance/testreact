import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  Wrapping App.jsx in StrictMode to check if it's not pure */}
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Address from './Components/Profile/Address';
import Photo from './Components/Profile/ProfilePhoto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.render(
  <>
    <Address />
    <Photo />
  </>,
  document.getElementById('root')
);
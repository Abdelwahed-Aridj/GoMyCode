import React from 'react';
import Photo from './Components/Profile/ProfilePhoto';
import Name from './Components/Profile/FullName';
import Adresse from './Components/Profile/Address';


function App() {
  return (
    <div>
      <Adresse />
      <Photo />
      <Name/>
    </div>
  );
}
export default App;

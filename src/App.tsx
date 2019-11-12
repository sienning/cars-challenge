import * as React from 'react';
import Cars from './components/Cars';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => (
  <div className="container" >
    <h1 className="text-center mb-5 mt-5">Cars Challenge - App</h1>
    <div>
      <Cars />
    </div>
  </div>
);

export default App;

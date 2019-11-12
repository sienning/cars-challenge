import * as React from 'react';
import Cars from './components/Cars';
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => (
  <div className="app" >
    <h1 className="text-center mb-5">Cars Challenge - App</h1>
    <div className="container">
      <Cars />
    </div>

  </div>
);

export default App;

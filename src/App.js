import React from 'react';
import './App.css';
import jquery from 'jquery';
import Person from './person';

const cont = 20;
function App() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-3">
          <Person></Person>
        </div>
        <div className="col-3">
          <Person></Person>
        </div>
        <div className="col-3">
          <Person></Person>
        </div>
        <div className="col-3">
          <Person></Person>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <Person></Person>
        </div>
        <div className="col-3">
          <Person></Person>
        </div>
        <div className="col-3">
          <Person></Person>
        </div>
        <div className="col-3">
          <Person></Person>
        </div>
      </div>      
    </div>
  );
}

export default App;

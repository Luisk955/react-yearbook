import React from 'react';
import './App.css';
import jquery from 'jquery';
import Person from './person';

const cont = 20;
function App() {
  return (
    <div className="container-fluid mt-2">
      <p className="h2">Yearbook</p>
      <div className="row">
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
      </div>
      <div className="row mt-md-3">
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
        <div className="col-md-3 mx-md-auto mt-2 col-12">
          <Person></Person>
        </div>
      </div>      
    </div>
  );
}

export default App;

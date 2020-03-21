import React from 'react';
import AppNavbar from './components/AppNavbar';
import CodeFragment from './components/CodeFragment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <div className="App">
        <AppNavbar />
        <CodeFragment />
      </div>
  );
}

export default App;

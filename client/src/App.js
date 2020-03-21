import React from 'react';
import AppNavbar from './components/AppNavbar';
import CodeFragmentList from './components/CodeFragmentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
      <div className="App">
        <AppNavbar />        
        <CodeFragmentList />
      </div>
  );
}

export default App;

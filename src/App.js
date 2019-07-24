import React from 'react';
import Header from './components/Header/Header'
import './App.scss'
import Headlines from './components/Headlines/Headlines'
function App() {
  return (
    <div>
      <Header/>
      <section className="main">
        <Headlines header="posts" desc="This is a test"/>
      </section>
    </div>
  );
}

export default App;

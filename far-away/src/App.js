import React from 'react';
import './index.css';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList';
import Logo from './Logo';

function App() {
  return (
    <div className="">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className='HeaderContainer'>
      <Header />
    </div>
  );
}

export default App;

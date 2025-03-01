import React from 'react';
import ReactDOM from 'react-dom/client';
import MyButton from './components/Button';
import MyContainer from './components/Container';
import './styles.css';

const handleClick = () => {
  alert('Кнопка нажата!');
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContainer>
      <h1 className="my-title">Лабораторная работа № 2</h1>
      <MyButton label="Кнопка" onClick={handleClick} />
    </MyContainer>
  </React.StrictMode>
);


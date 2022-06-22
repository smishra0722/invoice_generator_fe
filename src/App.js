import React from 'react';
import './App.css';
import Home from './pages/home/home'
import Form from './pages/form/form'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  const [isFormPage, setIsFormPage] = React.useState(false)
  return (
    <div className="App">
        <Link to={isFormPage ? '/form' : '/'} onClick={() => setIsFormPage((prev) => !prev)}>Go to {isFormPage ? 'Form' : 'Home'} Page</Link>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/form" element={<Form />} />
  </Routes>
    </div>
  );
}

export default App;

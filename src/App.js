import React from 'react';
import './App.css';
import Home from './pages/home/home'
import Form from './pages/form/form'
import {Routes, Route, Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {incremented, decremented} from "./redux/testRecducer";

function App() {
  // redux statements
  const dispatch = useDispatch()
  const {value} = useSelector(state => state.counter)

  const [isFormPage, setIsFormPage] = React.useState(false)

  return (
    <div className="App">
        <Link to={isFormPage ? '/form' : '/'} onClick={() => setIsFormPage((prev) => !prev)}>Go to {isFormPage ? 'Form' : 'Home'} Page</Link>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
      <div>Value: {value}</div>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/form" element={<Form />} />
  </Routes>
    </div>
  );
}

export default App;

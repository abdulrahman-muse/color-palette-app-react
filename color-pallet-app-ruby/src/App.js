import React, { useEffect, useState } from 'react';
import AddColorForm from './AddColorForm';
import './App.css';
import ColorPalleteItems from './ColorPalleteItems';
import Search from './Search';
import Message from './Message';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './NavBar';


function App() {
  const [shades, setShades] = useState([]);
  const [colors, setColors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [background, setBackground] = useState("#071415");

  useEffect(() => {
    fetch("http://localhost:9292/shades")
      .then((response) => response.json())
      .then((data) => {
        setShades(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/colors")
      .then((response) => response.json())
      .then((data) => {
        setColors(data);
      });
  }, []);


  const addColor = (formData) => {
    fetch("http://localhost:9292/shades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newCr) => setShades([...shades, newCr]));
  };




  return (
    <div className='App' style={{ background: background }}>
      <Router>
        <NavBar setBackground={setBackground} />
        <Switch>
          <Route exact path="/">
            <Message />
            <ColorPalleteItems shades={shades} setShades={setShades} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
          {/* <Route exact path="/search">
            <Search setSearchTerm={setSearchTerm} shades={shades} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route> */}
          <Route path="/add">
            <AddColorForm addColor={addColor} shades={shades} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
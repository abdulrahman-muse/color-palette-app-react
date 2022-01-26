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
    renderShades()
  }, []);

  function renderShades() {
    fetch("http://localhost:9292/shades")
      .then((response) => response.json())
      .then((data) => {
        setShades(data);
      })
  }

  // let get = async () => {
  //   try {

  //     const response = await fetch('http://localhost:9292/shades')
  //     const json = await response.json()

  //     console.log(json);
  //   } catch (error) {
  //     console.log(error.response.body);
  //   }
  // };

  // let post = async (formData) => {
  //   try {
  //     const settings = {
  //       method: 'POST',
  //       headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(FormData)
  //   };
  //     const response = await fetch('http://localhost:9292/shades',settings)
  //     const json = await response.json()

  //     console.log(json);
  //   } catch (error) {
  //     console.log(error.response.body);
  //   }
  // };




  const addColor = (formData) => {
    fetch("http://localhost:9292/shades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newSh) => {
        console.log(newSh)
      })
  };

  function deleteShade(id) {
    fetch(`http://localhost:9292/shades/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedShade) => {
        console.log(deletedShade)
        const filteredShades = shades.filter((shade) => shade.id !== id)
        setShades(filteredShades)
      });
  }





  return (
    <div className='App' style={{ background: background }}>
      <Router>
        <NavBar setBackground={setBackground} />
        <Switch>
          <Route exact path="/">
            <Message />
            <ColorPalleteItems setShades={setShades} deleteShade={deleteShade} shades={shades} setShades={setShades} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
          {/* <Route exact path="/search">
            <Search setSearchTerm={setSearchTerm} shades={shades} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route> */}
          <Route path="/add">
            <AddColorForm addColor={addColor} deleteShade={deleteShade} shades={shades} colors={colors} searchTerm={searchTerm} background={background} setBackground={setBackground} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
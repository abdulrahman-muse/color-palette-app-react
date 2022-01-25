import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './Search';

function App() {
  const [current, setCurrent] = useState(null);
  const [shades, setShades] = useState([]);
  const [background, setBackground] = useState("#071415");
  const [searchTerm, setSearchTerm] = useState("");

  const shToShow = shades.filter((sh) =>
        sh.hex_code.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    fetch("http://localhost:9292/shades")
      .then((response) => response.json())
      .then((data) => {
        setShades(data);
      });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setCurrent(null)
    }, 3000)
    return () => clearTimeout(timeoutId)
}, [current])


  return (
    <div style={{ background: background, paddingTop: '250px' }}>
       {current !== null && <h1 style={{ paddingTop: "20px" }}> Copied {current}</h1>}
      <div className="container">
        {shToShow.map((shade) => (
          <div key={shade.id} className="card" >
            <div style={{
              background: shade.hex_code,
              filter: "brightness(85%)",
              boxShadow: shade.hex_code === background ? "0 0 5px #000" : ""
            }}
              className="box"
              onClick={() => setBackground(shade.hex_code)}>
            </div><p style={{ color: shade.hex_code === background ? "#fff" : shade.hex_code, padding: "7px" }}
                                onClick={(() => setCurrent(shade.hex_code))}>{shade.hex_code}</p>
          </div>))}</div>
          <Search searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}/></div>)
}




export default App;

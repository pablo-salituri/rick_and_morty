import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'


function App () {

  const [characters, setCharacters] = useState([])
  
  function onSearch(personaje) {
    fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(personaje => personaje.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch = {onSearch} />
        <Routes>
          <Route path="/Home" element={<Cards characters={characters} onClose={onClose}/>}> </Route>
          <Route path="/About" element={<About />}> </Route>
          <Route path="/detail/:detailId" element={<Detail />}> </Route>
        </Routes>
      </div>
{/*       <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div> */}
    </div>
  )
}

export default App

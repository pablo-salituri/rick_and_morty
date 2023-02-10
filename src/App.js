//import Card from './components/Card.jsx'
//import SearchBar from './components/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'



function App () {

  const [characters, setCharacters] = useState([])
  
  function onSearch() {
    const example = 
      {
        name: 'Morty Smith',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      };
    setCharacters([example]);
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch = {onSearch} />
      </div>

{/*       <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}

      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App

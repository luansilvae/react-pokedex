import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import axios from 'axios'

import Header from '../../components/Header'

import './styles.css'

interface Pokemon {
  name: string,
}

function Main() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [limit, setLimit] = useState(6)
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`).then((response) => {
      const data = response.data.results
      const totalPokemon = response.data.count

      setCount(totalPokemon)
      setPokemon(data)
    })
  }, [limit])


  function looadMorePokemon() {
    setLimit(limit + 4)
  }
  return (
    <div className="container">
      <Header />
      <main>
        <div className="grid">

          {pokemon.map((poke, index) => {
            return (
              <div key={poke.name} className="card">
                <div className="card-content">
                  <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} 
                    alt="Pokemon" 
                  />
                  <Link to="/">{poke.name}</Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="actions">
          <button 
            disabled={limit > count} 
            onClick={looadMorePokemon}
          > 
            Mais 
            <FiPlus 
              size={20} 
              color="#FFFFFF" 
              className="moreIcon" 
            />
          </button>
        </div>
      </main>
    </div>
  )
}

export default Main
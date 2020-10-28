import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import Header from '../../components/Header'

import './styles.css'

function Main() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="grid">
          <div className="card">
            <div className="card-content">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon" />

              <Link to="">Bulbasaur</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon" />

              <Link to="">Bulbasaur</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon" />

              <Link to="">Bulbasaur</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon" />

              <Link to="">Bulbasaur</Link>
            </div>
          </div>
        </div>

        <div className="actions">
            <button><FiChevronsLeft size={25} color="#FFFFFF" /> Anterior</button>
            <button>Próximo <FiChevronsRight size={25} color="#FFFFFF" /></button>
          </div>
      </main>
    </div>
  )
}

export default Main
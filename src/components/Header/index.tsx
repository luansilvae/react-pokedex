import React from 'react'
import  './styles.css'

import pokeballLogo from '../../assets/images/pokeball.svg'

function Header() {
  return (
    <header>
      <a href="/"><img src={pokeballLogo} alt="Pokeball"/></a>
    </header>
  )
}

export default Header
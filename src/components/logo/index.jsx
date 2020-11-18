import React from 'react';

import { LogoContainer, Logo } from './styles';

import PokemonLogo from './PokemonLogo.png'

function logo() {
  return (
      <LogoContainer>
          <Logo src={PokemonLogo}/>
      </LogoContainer>
  );
}

export default logo;
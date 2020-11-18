import styled from 'styled-components'

export const CardsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-top: 1rem;
/* formata o background conforme definido na propriedade color */
background: ${(props) => props.color};
`

export const Flex = styled.div`
display: flex;
flex-direction: column;

padding: 1rem;
border-radius: 10px;

width: 40%;
height: auto;
border-radius: 5px;

background-color: ${(props) => props.color};


`
export const PokeNameDiv = styled.div`
grid-area: name;

width: 100%;
height: 2rem;
border-bottom: 1px solid red;

padding: 5px;
display: flex;
justify-content: space-evenly;
align-items: center;

`
export const PokemonName = styled.h3``

export const ImgContainer = styled.div`
width: 100%;
height: 80%;
`

export const PokeImg = styled.img`
grid-area: img;
object-fit: cover;
width: 100%;
`

export const InfosContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

export const Info = styled.div`
`

export const Infos = styled.h5`
grid-area: ${(props) => props.area};
border: 0.5px solid black;
border-radius: 5px;
padding: 3px;
width: 100%;

`

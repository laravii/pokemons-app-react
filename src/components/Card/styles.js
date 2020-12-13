import styled, { keyframes } from 'styled-components'
import { BaseAnimation } from "../animation/styles";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

padding: 1rem;
margin-top: 1rem;
border-radius: 10%;

width: 250px;
height: auto;


background: ${(props) => props.color};

@media screen and (max-width: 768px){
  width: 210px;
}

`
export const PokeNameDiv = styled.div`
grid-area: name;

width: 100%;
height: 2rem;
border-bottom: 1px solid #000000;

padding: 5px;
display: flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 600px){
    font-size: 0.80rem;
}

`
export const PokemonName = styled.h3``

export const ImgContainer = styled.div`
display: flex;
justify-content: center;
width: 150px;
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

export const Info = styled.span`
`

export const Infos = styled.h5`
grid-area: ${(props) => props.area};
border: 0.5px solid #20232495;
border-radius: 5px;
padding: 3px;
width: 100%;

`
const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;
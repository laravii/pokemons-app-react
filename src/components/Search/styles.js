import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const DefaultContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px){
    width: 100%;
}

`
export const Label = styled.label`
display: flex;
flex-direction: column;
font-size: 1rem;
margin-bottom: 4px;
color: #fff;
@media screen and (max-width: 600px){
    font-size: 0.80rem;
}`

export const SearchInput = styled.input`
width: 100%;
height: 3rem;
border: none;
background-color: #97b498;
border-radius: 10px;
color: #000;

padding: 1rem;
`

export const Loading = styled.img`
width: 200px;
height: auto;
object-fit: cover;
display: flex;
align-items: center;

`


export const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

width: 100%;
`

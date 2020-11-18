import styled from 'styled-components'

import {Search} from '@styled-icons/bootstrap/Search'

export const Grid = styled.div`
width: 50%;
box-sizing: border-box;
`

export const FormContainer = styled.form`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
font-size: 1rem;`

export const SearchInput = styled.input`
width: 100%;
height: 3rem;
border: none;
`

export const SearchBtn = styled(Search)`
width: 3rem;
height: 2rem;
padding: 0.5rem;
background-color: white;

:hover{
    cursor: pointer;
}

:active{
    border: 1px solid blue;
}
`

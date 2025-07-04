'use client'
import styled from "styled-components"

const StyledHeader = styled.header`
    padding: 24px;
    background-color:rgb(240, 206, 132);
`

const StyledPageTitle = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 24px;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledPageTitle>Italian Recipes</StyledPageTitle>
        </StyledHeader>
    )
}

export default Header
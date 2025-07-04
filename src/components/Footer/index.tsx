'use client'
import styled from "styled-components"

const StyledFooter = styled.footer`
    padding: 24px;
    background-color:rgb(240, 206, 132);
`

const StyledFooterTitle = styled.h1`
    font-size: 3rem;
    color: white;
    text-align: center;
    margin: 24px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterTitle>Footer</StyledFooterTitle>
        </StyledFooter>
    )
}

export default Footer
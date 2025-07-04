'use client'
import styled from "styled-components"
import { primary, grey } from "../../utils/colorvariables"

const StyledFooter = styled.footer`
    padding: 24px;
    background-color: ${primary.base};
`

const StyledFooterTitle = styled.h1`
    font-size: 1.5rem;
    color: ${grey.shade};
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
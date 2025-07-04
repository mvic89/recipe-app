'use client'
import styled from "styled-components"
import pastaLogo from '../../assets/pasta-logo.png'
import { primary} from "../../utils/colorvariables"
import { screens } from "../../utils/breakpoints"

const StyledHeader = styled.header`
    padding: 24px;
    background-color: ${primary.base};
    display: flex;
    justify-content: center;

    @media screen and ${screens.mobile} {
        padding: 12px;
    }
`

const LogoLink = styled.a`
  display: inline-block;
`;

const Logo = styled.img`
    width: 100px;
`

const Header = () => {
    return (
        <StyledHeader>
            <LogoLink href="/">
                <Logo src={pastaLogo} alt='Pasta logotype'/>
            </LogoLink>
        </StyledHeader>
    )
}

export default Header
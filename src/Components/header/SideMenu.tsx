import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import styled from 'styled-components';
import NavBar from './NavBar';

const SideMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);

    return (
        <>
            <StyledSideMenu open={open}>
                <Link to='/' onClick={() => close()}>
                    <StyledSideLink>About</StyledSideLink>
                </Link>
                <Link to='/skills' onClick={() => close()}>
                    <StyledSideLink>Skills</StyledSideLink>
                </Link>
                <Link to='/projects' onClick={() => close()}>
                    <StyledSideLink>Projects</StyledSideLink>
                </Link>
                <NavBar />
            </StyledSideMenu>
            <Burger open={open} setOpen={setOpen} />
        </>
    );
};

export default SideMenu;

const StyledSideMenu = styled.nav<{ open: boolean }>`
    position: fixed;
    z-index:9;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    min-width:content;
    gap: 4rem;
    background-color: #037971;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    @media (max-width:414px){
        width:100%;
    }
`;

const StyledSideLink = styled.span`

    font-size: 3rem;
    color: #cfc8b2;
    padding: 0 4rem;
    text-decoration: none;

    :hover {
        color: #4C2E05;
        cursor: pointer;
    }
`;

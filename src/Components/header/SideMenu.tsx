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
                <SideAnchors href='#about' onClick={() => close()}>
                    <StyledSideLink>About</StyledSideLink>
                </SideAnchors>
                <SideAnchors href='#skills' onClick={() => close()}>
                    <StyledSideLink>Skills</StyledSideLink>
                </SideAnchors>
                <SideAnchors href='#projects' onClick={() => close()}>
                    <StyledSideLink>Projects</StyledSideLink>
                </SideAnchors>
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
    background-color: #cfc8b2;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    @media (max-width:414px){
        width:100%;
    }
`;

const StyledSideLink = styled.span`

    font-size: 3rem;
    color: #011627;
    padding: 0 4rem;
    text-decoration: none;

    :hover {
        color: #037971;
        cursor: pointer;
    }
`;

const SideAnchors = styled.a`
  scroll-behavior: smooth !important;
`

import SideMenu from './SideMenu';
import styled from "styled-components";

const Header = () => {

    return (
        <HeaderBar>
            <SideMenu />

        </HeaderBar>
    );
};

export default Header;

const HeaderBar = styled.header`
    background-color: var(--tertiary-color);
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

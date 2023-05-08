import SideMenu from './SideMenu';
import styled from "styled-components";
import NavBar from './NavBar';
import TitleBar from './TitleBar';

const Header = () => {

    return (
        <HeaderBar>
            <SideMenu />
            <NavBar />
        </HeaderBar>
    );
};

export default Header;

const HeaderBar = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    @media (max-width: 1300px) {
        position: relative;
    }
`;

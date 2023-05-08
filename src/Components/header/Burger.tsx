import styled from 'styled-components';

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

export const Burger = (props: Props) => (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
);

const StyledBurger = styled.button<{ open: boolean }>`
    height: 2rem;
    margin-left:2rem;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 10;
    @media (max-width: 1000px) {
        position: absolute;
        margin-left: .5rem;
    }

    div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: #cfc8b2;
        transition: all 0.3s linear;
        transform-origin: 1px;

        :first-child {
            background-color: ${({ open }) => (open ? '#011627' : '#cfc8b2')};
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }
        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
            background-color: ${({ open }) => (open ? '#011627' : '#cfc8b2')};
        }
    }
`;

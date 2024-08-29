import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    from {
        transform: translateY(-50px);
    }
    to {
        transform: translateY(0);
    }
`;

export const Container = styled.div<{ isActive?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    animation: ${({ isActive }) => (isActive ? fadeIn : 'none')} 0.5s ease-in-out;
`;

export const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`;

export const Content = styled.div<{ isActive?: boolean }>`
    width: 550px;
    background-color: #fff;
    border-radius: 4px;
    height: 70%;
    z-index: 2;
    overflow-y: auto;
    box-shadow: 0px 0px 5px #00000033;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    animation: ${({ isActive }) => (isActive ? slideIn : 'none')} 0.5s ease-in-out;
`;

export const ImageContainer = styled.div`
    height: 300px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const HeroName = styled.h3`
`

export const DetailsHero = styled.div`
    padding: 16px 24px;
`;

export const Comics = styled.div``;
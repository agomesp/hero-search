import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 24px 34px;
    @media (max-width: 800px) {
        text-align: center;    
    }
`

export const PageTitle = styled.h1`
    font-size: 2em;
    margin: 0;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;

    @media (min-width: 800px) {
        margin-top: 16px;
    }
    
    span {
        font-size: 1.2em;
        font-weight: bold;
        margin: 0;
    }
`

export const ContainerTopPage = styled.div``;
export const ContainerHome = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
`;
import styled, {keyframes} from 'styled-components'

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    margin-top: 32px;
    border-spacing: 0 8px;
    
    td:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    td:last-child {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    
    tbody {
        position: relative;
    }
`

export const TrHero = styled.tr`
    box-shadow: 0px 0px 5px #00000033;
    background-color: #fff;
    cursor: pointer;
`

export const TdHero = styled.td`
    
`

export const HeroImage = styled.div`
    overflow: hidden;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ContainerHero = styled.div`
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 24px;
`

export const HeroName = styled.span`
    font-weight: bold;
`

export const TrHeader = styled.tr`
    text-align: left;
    color: #8E8E8E;
    font-size: 0.75em;
    
    @media (max-width: 800px) {
        th {
            padding-left: calc(48px + 24px + 16px);
        }
    }
    
    th:first-child {
        padding-left: 16px;
        padding-bottom: 9px;
    }
`

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.87em;
    height: 60px;
    overflow: auto;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 400px;
    overflow-x: hidden;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #167ABC;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 1s linear infinite;
    margin: 20px auto;
`;

export const ContainerSpinner = styled.tr`
    position: absolute;
    width: 100%;
    background-color: #fff;
    text-align: center;
`;
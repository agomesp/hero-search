import styled from 'styled-components';

export const PaginationButton = styled.button<{ isActive?: boolean }>`
    background-color: ${({ isActive }) => (isActive ? '#167ABC' : '#F5F5F5')};
    border: 1px solid #E5E5E5;
    color: ${({ isActive }) => (isActive ? '#fff' : '#8E8E8E')};
    padding: 8px 16px;
    margin: 0 4px;
    cursor: pointer;
    font-size: 0.6em;
    border-radius: 4px;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        ${PaginationButton} {
            display: none;
        }
        ${PaginationButton}:nth-child(-n+5) {
            display: inline-block;
        }
    }
`;

export const ChevronButton = styled.button`
    background-color: #fff;
    padding: 8px 0;
    margin: 0 4px;
    border: none;
    cursor: pointer;
    font-size: 0.6em;
    border-radius: 4px;
    color: #8E8E8E;

    &:disabled {
        opacity: 0;
        cursor: default;
    }

    div {
        display: flex;
        margin-top: -2px;

        svg:last-child {
            margin-left: -4px;
        }
    }
`;
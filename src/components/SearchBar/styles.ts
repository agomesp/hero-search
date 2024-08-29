import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';

export const SearchInputContainer = styled.div`
    position: relative;
    width: 295px;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 8px 16px;
    font-size: 1em;
    border: 2px solid #E5E5E5;
    border-radius: 4px;
    outline: none;
    transition: border 0.2s;
    
    &:focus {
        border: 2px solid #167ABC;
    }

    &::placeholder {
        font-style: italic;
    }
`

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
`;
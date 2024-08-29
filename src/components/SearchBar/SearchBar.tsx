import * as S from './styles.ts'
import useNewsStore from "../../store/useHeroStore.ts";
import {useState} from "react";

const SearchBar = () => {
    const {setSearch} = useNewsStore();
    const [timeoutId, setTimeoutId] = useState(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId as any);

        const timeout = setTimeout(() => {
            setSearch(event.target.value);
        }, 400);

        setTimeoutId(timeout as any);
    };

    return (
        <S.SearchInputContainer>
            <S.SearchInput onChange={handleSearch} type="text" placeholder="Search..."/>
            <S.SearchIcon></S.SearchIcon>
        </S.SearchInputContainer>
    );
}

export default SearchBar;
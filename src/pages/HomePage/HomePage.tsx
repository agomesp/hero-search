import Header from "../../components/Header/Header.tsx";
import * as S from "./styles.ts";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import HeroesTable from "../../components/HeroesTable/HeroesTable.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const HomePage = () => {
    return (
        <S.ContainerHome>
            <S.ContainerTopPage>
                <Header></Header>
                <S.Container>
                    <S.PageTitle>Busca de Personagens</S.PageTitle>
                    <S.SearchContainer>
                        <span>Nome do personagem</span>
                        <SearchBar></SearchBar>
                    </S.SearchContainer>

                    <HeroesTable></HeroesTable>
                </S.Container>
            </S.ContainerTopPage>
            <Footer></Footer>
        </S.ContainerHome>
    )
}

export default HomePage
import Pagination from "../Pagination/Pagination.tsx";
import * as S from "./styles.ts";
import useHeroStore from "../../store/useHeroStore.ts";

const Footer = () => {
    const {currentPage, totalPages, setCurrentPage} = useHeroStore();

    return (
        <S.FooterContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </S.FooterContainer>
    );
}

export default Footer;
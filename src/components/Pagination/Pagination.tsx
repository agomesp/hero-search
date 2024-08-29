import * as S from './styles.ts';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {PaginationProps} from "./types.ts";

const HeroPagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getPaginationRange = () => {
        let range = [];
        if (window.innerWidth > 800) {
            for (let i = 1; i <= totalPages; i++) {
                range.push(i);
            }
        } else {
            const start = Math.max(1, currentPage - 1);
            const end = Math.min(totalPages, currentPage + 2);
            for (let i = start; i <= end; i++) {
                range.push(i);
            }
        }

        return range;
    };

    return (
        <S.Pagination>
            <S.ChevronButton
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            >
                <div>
                    <FaChevronLeft/>
                    <FaChevronLeft/>
                </div>
            </S.ChevronButton>

            <S.ChevronButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaChevronLeft/>
            </S.ChevronButton>


            {getPaginationRange().map((page) => (
                <S.PaginationButton
                    key={page}
                    isActive={currentPage === page}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </S.PaginationButton>
            ))}
            {totalPages !== 0 && (
                <>
                    <S.ChevronButton
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <FaChevronRight/>
                    </S.ChevronButton>
                    <S.ChevronButton
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        <div>
                            <FaChevronRight/>
                            <FaChevronRight/>
                        </div>
                    </S.ChevronButton>
                </>
            )}
        </S.Pagination>
    );
};

export default HeroPagination;
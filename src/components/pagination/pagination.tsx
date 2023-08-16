import { PageBtn, Wrapper } from "./styled";

type Props = {
  count: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

export const Pagination:React.FC<Props> = ({ count, currentPage, setCurrentPage}) => {
  const totalPages = Math.floor(count / 20);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    
    const maxDisplayedPages = 11;
    const halfDisplayed = Math.floor(maxDisplayedPages / 2);
    let startPage = Math.max(currentPage - halfDisplayed, 1);
    let endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    if (endPage - startPage < maxDisplayedPages - 1) {
      startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
    }

    const displayedPageNumbers = pageNumbers.slice(startPage - 1, endPage);

    return (
      <>
        {startPage > 1 && <span>...</span>}
        {displayedPageNumbers.map((pageNumber) => (
          <PageBtn
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PageBtn>
        ))}
        {endPage < totalPages &&  <span>...</span>}
      </>
    );
  };

  return (
    <Wrapper>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      {renderPageNumbers()}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </Wrapper>
  );
}
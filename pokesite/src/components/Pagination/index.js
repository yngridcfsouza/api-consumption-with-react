import { PaginationContainer } from './styles';
/* import Button from '../Button'; */

export default function Pagination({ currentPage, onPageChange, hasNext }) {
  return (
    <PaginationContainer>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Anterior
      </button>
      <span>Página {currentPage + 1}</span>
      <button
        type='button'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        Próxima
      </button>
    </PaginationContainer>
  );
}

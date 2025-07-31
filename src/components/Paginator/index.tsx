import './Paginator.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

type PaginatorProps = {
  totalItems: number;
  page: number;
  perPage: number;
}

const Paginator = ({ page, totalItems, perPage }: PaginatorProps) => {
  const totalPages = Math.ceil(totalItems / perPage)
  const pagesToShow = 5

  let startPage = Math.max(1, page - Math.floor(pagesToShow / 2))
  let endPage = startPage + pagesToShow - 1

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(1, endPage - pagesToShow + 1)
  }

  const pageNumbers = []
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='paginator'>
      <div className="pages">
        {page > 1 && (
          <Link to={`?page=${page - 1}`} className="paginator-button" reloadDocument>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
        )}

        {pageNumbers.map((pageNum) => (
          <Link
            key={pageNum}
            to={`?page=${pageNum}`}
            reloadDocument
            className={`paginator-page-button${page === pageNum ? ' disabled' : ''}`}
          >
            {pageNum}
          </Link>
        ))}

        {page < totalPages && (
          <Link to={`?page=${page + 1}`} className="paginator-button" reloadDocument>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        )}
      </div>
      <div className="paginator-info">
        Página {page} de {totalPages}
      </div>
    </div>
  )
}

export default Paginator

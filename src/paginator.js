import React from 'react'
import _ from 'lodash'

const Paginator = (props) => {
  const {currentPage, totalCount, onPageChange, pageSize} = props
  console.log(totalCount)

  let pagesCount = Math.ceil(totalCount / pageSize)
  if (pagesCount === 1) return null
  let pages = _.range(1, pagesCount + 1)
  console.log('pages ', pages)


  return <nav aria-label="Page navigation example">
    <ul className="pagination">
      {
        pages.map(page => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))
      }

    </ul>
  </nav>
}

export default Paginator
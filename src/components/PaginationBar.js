import React from 'react'

function PaginationBar({totalPosts,setPage,page}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / 12); i++) {
      pageNumbers.push(i);
    }
  return (
    <nav>
    <ul className='pagination'>
      {pageNumbers.map(number => (
       <li  key={number} className='page-item hover'>
          <a onClick={() => setPage(number)} className='page-link' style={{backgroundColor:page==number&&'#DBF3FA'}}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>  )
}

export default PaginationBar
import type { NextPage } from 'next'
import React, {useState} from 'react'



const Search: NextPage = () => {
  const [isActive, setActive] = useState(false);

  const showSearchResults = () => {
    setActive(!isActive)
  };

  return (
    <div className="main-search px-4 flex-fill">
      <input className="form-control" type="text" placeholder="Enter your search key word" 
        onFocus={showSearchResults} onBlur={showSearchResults}></input>
      <div className={(isActive ? 'show' : '') + ` slidedown card shadow rounded-4 search-result`}>
        <div className="card-body">
          <small className="text-uppercase text-muted">Recent searches</small>
          <div className="d-flex flex-wrap align-items-start mt-2 mb-4">
              <a className="small rounded py-1 px-2 m-1 fw-normal bg-primary text-white" href="#">MIRAmb Admin</a>
              <a className="small rounded py-1 px-2 m-1 fw-normal bg-secondary text-white" href="#">Hospital Admin</a>
              <a className="small rounded py-1 px-2 m-1 fw-normal bg-info text-white" href="#">Project</a>
              <a className="small rounded py-1 px-2 m-1 fw-normal bg-dark text-white" href="#">Social App</a>
              <a className="small rounded py-1 px-2 m-1 fw-normal bg-danger text-white" href="#">University Admin</a>
          </div>
          <small className="text-uppercase text-muted">Suggestions</small>
          <div className="card list-group list-group-flush list-group-custom mt-2">
            <a className="list-group-item list-group-item-action text-truncate" href="#">
                <div className="fw-bold">Title</div>
                <small className="text-muted">Trimmed text example</small>
            </a>
            <a className="list-group-item list-group-item-action text-truncate" href="#">
                <div className="fw-bold">Date title</div>
                <small className="text-muted">There are many variations of trimmed text examples</small>
            </a>
            <a className="list-group-item list-group-item-action text-truncate" href="#">
                <div className="fw-bold">Image Input title</div>
                <small className="text-muted">Trimmed text example</small>
            </a>
            <a className="list-group-item list-group-item-action text-truncate" href="#">
                <div className="fw-bold">DataTables title</div>
                <small className="text-muted">Lorem Ipsum is simply trimmed text</small>
            </a>
            <a className="list-group-item list-group-item-action text-truncate" href="#">
                <div className="fw-bold">Main title</div>
                <small className="text-muted">Trimmed text example</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
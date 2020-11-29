import { useState } from 'react'

export default function SearchBox(props) {
  const {
    placeholder,
    searchHandler,
  } = props;

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          searchHandler(event.target.value);
        }}
      />
      {
        searchTerm !== ''
        && (
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => searchHandler('')}
            >
              Clear
            </button>
          </div>
        )
      }
      
    </div>
  )
}

import React from 'react'
import styles from "./searchresult.module.css"

function SearchResult({coin:{thumb, id, name}}) {
  return (
    <div>
        <li key={id}>
          <img src={thumb} alt={name} />
          <p>{name}</p>
        </li>
    </div>
  )
}

export default SearchResult
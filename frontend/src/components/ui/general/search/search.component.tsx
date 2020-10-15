import React from 'react'
import { Link } from 'gatsby'

import styles from './search.module.scss'

import IconSearch from '~/assets/icons/icon-search.svg'

const Search = () => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Wanna see some UFO?"
        className={styles.searchText}
      />
      <Link to="/" className={styles.searchBtn}>
        <IconSearch />
      </Link>
    </div>
  )
}

export default Search

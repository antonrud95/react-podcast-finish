import React from 'react'
import styles from './mobile-search.module.scss'

import SButton from '~/components/ui/general/button/button.component'
import IconSearch from '~/assets/icons/icon-search.svg'

const MobileSearch = () => {
  return (
    <div>
      <div className={styles.mobileSearchInputBlock}>
        <IconSearch className={styles.mobileSearchIcon} />
        <input type="text" className={styles.mobileSearchInput} />
      </div>
      <SButton variant="section">Search</SButton>
    </div>
  )
}

export default MobileSearch

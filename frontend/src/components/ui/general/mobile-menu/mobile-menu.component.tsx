import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileSearch from '~/components/ui/general/mobile-search/mobile-search.component'

import FC from '~/types/fc'

import CloseIcon from '~/assets/icons/menu-close-icon.svg'

import styles from './mobile-menu.module.scss'

interface Props {
  isShown: boolean
  toggle: (value: boolean) => void
}

const MobileMenu: FC<Props> = ({ isShown, toggle }) => {
  const shownClass = [styles.root, styles.root__shown].join(' ')
  const menuRef = useRef(null)
    useEffect(() => {
    isShown ? disableBodyScroll(menuRef.current) : clearAllBodyScrollLocks()
  }, [isShown])
  const closeClickHandler = (e) => {
    toggle(false)
    e.preventDefault()
    enableBodyScroll(menuRef.current)
    clearAllBodyScrollLocks()
  }
  return (
    <div className={isShown ? shownClass : styles.root} ref={menuRef}>
      <Container>
        <Logo />
        <CloseIcon onClick={closeClickHandler} />
      </Container>
      <Container className={styles.linkBlock}>
        <Link to="/" className={styles.link}>
          Listen
        </Link>
        <Link to="/" className={styles.link}>
          Watch
        </Link>
        <Link to="/" className={styles.link}>
          Blog
        </Link>
        <Link to="/" className={styles.link}>
          About
        </Link>
        <Link to="/" className={styles.link}>
          Where to find us
        </Link>
        <Link to="/" className={styles.link}>
          Support
        </Link>
        <MobileSearch />
      </Container>
    </div>
  )
}

export default MobileMenu

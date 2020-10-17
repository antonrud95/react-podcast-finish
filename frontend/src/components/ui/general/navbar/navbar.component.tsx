import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileMenu from '~/components/ui/general/mobile-menu/mobile-menu.component'
import Search from '~/components/ui/general/search/search.component'

import DarkMenuOpenIcon from '~/assets/icons/menu-open-icon.svg'

import styles from './navbar.module.scss'

const SNavbar = () => {
  const [isMenuShown, toggleMenu] = useState(false)
  const [isOnTop, setOnTop] = useState(true)

  const openClickHandler = () => {
    toggleMenu(true)
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    },
    [isOnTop]
  )

  return (
    <Navbar
      fixed="top"
      className={!isOnTop ? classnames(styles.navbar, styles.navbar__onLight) : styles.navbar}
    >
      <Container>
        <Logo />
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />

        <Nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Listen
          </Link>
          <Link to="/" className={styles.navLink}>
            Watch
          </Link>
          <Link to="/" className={styles.navLink}>
            Blog
          </Link>
          <Link to="/" className={styles.navLink}>
            About
          </Link>
          <Link to="/" className={styles.navLink}>
            Where to find us
          </Link>
          <Link to="/" className={styles.navLink}>
            Support
          </Link>
        </Nav>
        <Search />
      </Container>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar

import React from 'react'
import Navbar from '~/components/ui/general/navbar/navbar.component'
import '~/styles/index.scss'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    topStars: file(relativePath: { eq: "images/hero/top-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bottomStars: file(relativePath: { eq: "images/hero/bottom-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Img
        fluid={data.topStars.childImageSharp.fluid}
        className="top"
      />
      <Img
        fluid={data.bottomStars.childImageSharp.fluid}
        className="bot"
      />
    </>
  )
}

export default Layout

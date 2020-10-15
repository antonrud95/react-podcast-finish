import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection sliders={data.allStrapiSliders.nodes}/>
  </Layout>
)

export const query = graphql`
  query {
    allStrapiSliders {
      nodes {
        id
        uppertitlefirst
        uppertitlesecond
        title
        description
      }
    }
  }
`
export default IndexPage

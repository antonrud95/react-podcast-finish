import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import SeriesSection from '~/components/sections/series-section/series-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection sliders={data.allStrapiSliders.nodes}/>
    <SeriesSection series={data.allStrapiSeries.nodes}/>
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
    allStrapiSeries {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 263 quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap'

import SimpleSlider from '../../ui/general/slider/slider.component'
import SliderItem from '../../ui/general/hero-slider-item/hero-slider-item.component'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'

import FC from '~/types/fc'
import { SlidersType } from '~/types/sliders.type'

interface Props {
  sliders: SlidersType[]
}

const HeroSection: FC<Props> = ({ sliders }) => {
  const data = useStaticQuery(graphql`
    query {
      earthPic: file(relativePath: { eq: "images/hero/earth.png" }) {
        childImageSharp {
          fluid(maxWidth: 917, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      topPic: file(relativePath: { eq: "images/hero/top-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container fluid className={styles.containerOuter}>
      <Container className={styles.containerInner}>
        <div className={styles.heroBlock}>
          <Img
            fluid={data.earthPic.childImageSharp.fluid}
            className={styles.pic}
          />
        </div>
        <div className={styles.containerSlider}>
          <SimpleSlider>
            {sliders.map((slider: SlidersType, index) => {
              return (
                <SliderItem 
                  key={slider.id}
                  titlefirst={slider.uppertitlefirst}
                  titlesecond={slider.uppertitlesecond}
                  title={slider.title}
                  desc={slider.description}
                />
              )
            })}
          </SimpleSlider>
        </div>
      </Container>
      <Img
        fluid={data.topPic.childImageSharp.fluid}
        className={styles.background}
      />
    </Container>
  )
}
export default HeroSection

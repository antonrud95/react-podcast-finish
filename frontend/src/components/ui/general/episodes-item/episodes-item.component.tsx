import React from 'react'

import styles from './episodes-item.module.scss'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import FC from '~/types/fc'
import SButton from '~/components/ui/general/button/button.component'

import { useWindowDimensions } from '~/hooks/useWindowDimensions';

interface Props {
    title: string
    text: string
}

const EpisodesItem: FC<Props> = ({title, text}) => {
    const { width } = useWindowDimensions();
    const data = useStaticQuery(graphql`
    query {
      playPic: file(relativePath: { eq: "images/global/play.png" }) {
        childImageSharp {
          fluid(maxWidth: 54, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className={styles.episodesComponentWrapper}>
            <div className={styles.episodesTextContent}>
                <h3 className={styles.episodesTitle}>{title}</h3>
                <p className={styles.episodesText}>{text}</p>
            </div>
            <div className={styles.episodesButton}>
              {width > 767 ? (
                <Img
                fluid={data.playPic.childImageSharp.fluid}
                className={styles.buttonPlay}
                />
              ) : (
                <SButton variant="section">&#9658;<span className={styles.span}/>Listen</SButton>
              )}
            </div>
        </div>
    )
}

export default EpisodesItem
import React from 'react'

import styles from './episodes-item.module.scss'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import FC from '~/types/fc'

interface Props {
    title: string
    text: string
}

const EpisodesItem: FC<Props> = ({title, text}) => {
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
                <Img
                    fluid={data.playPic.childImageSharp.fluid}
                    className={styles.buttonPlay}
                />
            </div>
        </div>
    )
}

export default EpisodesItem
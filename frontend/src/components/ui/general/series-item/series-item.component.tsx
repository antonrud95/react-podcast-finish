import React from 'react'
import styles from './series-item.module.scss'

import Img from 'gatsby-image'
import SButton from '../../../ui/general/button/button.component'
import FC from '~/types/fc'
import { FluidObject } from 'gatsby-image'

interface Props {
    title: string
    text: string
    image: FluidObject
}

const SeriesItem: FC<Props> = ({title, text, image}) => {
    return(
        <div className={styles.itemWrapper}>
            <div className={styles.textWrapper}>
                <h3 className={styles.textWrapperTitle}>{title}</h3>
                <p className={styles.textWrapperText}>{text}</p>
            </div>
            <div className={styles.imageWrapper}>
                <Img fluid={image} className={styles.seriesImage}/>
            </div>
            <div className={styles.buttonWrapper}>
                <SButton variant="section" className={styles.seriesButton}>&#9658;<span>10 Episodes</span></SButton>
            </div>
        </div>
    )
}

export default SeriesItem
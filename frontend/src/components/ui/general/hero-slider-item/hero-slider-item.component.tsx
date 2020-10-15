import React from 'react'

import FC from '~/types/fc'

import SButton from '../../../ui/general/button/button.component'

interface Props {
  titlefirst: string
  titlesecond: string
  title: string
  desc: string
}

import styles from  './hero-slider-item.module.scss'

const SliderItem: FC<Props> = ({ titlefirst, titlesecond, title, desc }) => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.upperTitleBlock}>
                <p className={styles.upperTitle}>{titlefirst}</p>
                <span className={styles.spanTitle}/>
                <p className={styles.upperTitle}>{titlesecond}</p>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{desc}</p>
            <SButton variant="section" className={styles.heroBtn}>&#9658;Listen now</SButton>
        </div>
    )
}

export default SliderItem
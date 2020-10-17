import React from 'react'
import styles from './series-section.module.scss'

import FC from '~/types/fc'
import { SeriesType } from '~/types/series.type'
import SeriesItem from '../../ui/general/series-item/series-item.component'

import { useWindowDimensions } from '~/hooks/useWindowDimensions';

interface Props {
    series: SeriesType[]
  }

const SeriesSection: FC<Props> = ({ series }) => {
    const { width } = useWindowDimensions();
    return(
        <React.Fragment>
            <h2 className={styles.seriesMainTitle}>All series</h2>
            <div className={styles.seriesContainer}>
                {width <= 767 ? 
                
                series.map((serie: SeriesType, index) => {
                    if (index > 2) {
                        return
                    } else {
                        return (
                            <SeriesItem
                                key={serie.id} 
                                title={serie.title}
                                text={serie.description}
                                image={serie.image.childImageSharp.fluid}
                            />
                        )
                    }
                    
                }) :
                series.map((serie: SeriesType, index) => {
                    return (
                        <SeriesItem
                            key={serie.id} 
                            title={serie.title}
                            text={serie.description}
                            image={serie.image.childImageSharp.fluid}
                        />
                    )
                })
                }
            </div>
        </React.Fragment>
    )
}

export default SeriesSection
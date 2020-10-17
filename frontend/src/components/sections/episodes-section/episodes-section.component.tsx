import React from 'react'

import styles from './episodes-section.module.scss'
import { EpisodesType } from '~/types/episodes.type'
import EpisodesItem from '../../ui/general/episodes-item/episodes-item.component'
import FC from '~/types/fc'
import SButton from '../../ui/general/button/button.component'

import { useWindowDimensions } from '~/hooks/useWindowDimensions';

interface Props {
    episodes: EpisodesType[]
}

const EpisodesSection: FC<Props> = ({episodes}) => {
    const { width } = useWindowDimensions();
    return (
        <React.Fragment>
            <h2 className={styles.episodesMainTitle}>All episodes</h2>
            <div className={styles.episodesContainer}>
                { width <= 767 ? episodes.map((episode: EpisodesType, index) => {
                    if (index > 2) {
                        return
                    } else {
                        return (
                            <EpisodesItem 
                                key={episode.id}
                                title={episode.title}
                                text={episode.text}
                            />
                            )
                        }
                    }) :
                    episodes.map((episode: EpisodesType, index) => {
                        return (
                            <EpisodesItem 
                                key={episode.id}
                                title={episode.title}
                                text={episode.text}
                            />
                        )
                    })
                }
                
            </div>
            {width <= 767 && 
                <SButton variant="section" className={styles.episodesBtn}>View all episodes</SButton>
            }
        </React.Fragment>
    )
}

export default EpisodesSection
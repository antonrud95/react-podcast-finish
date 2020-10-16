import React from 'react'

import styles from './episodes-section.module.scss'
import { EpisodesType } from '~/types/episodes.type'
import EpisodesItem from '../../ui/general/episodes-item/episodes-item.component'
import FC from '~/types/fc'
import SButton from '../../ui/general/button/button.component'

interface Props {
    episodes: EpisodesType[]
}

const EpisodesSection: FC<Props> = ({episodes}) => {
    return (
        <React.Fragment>
            <h2 className={styles.episodesMainTitle}>All episodes</h2>
            <div className={styles.episodesContainer}>
                {episodes.map((episode: EpisodesType, index) => {
                    return (
                        <EpisodesItem 
                            key={episode.id}
                            title={episode.title}
                            text={episode.text}
                        />
                    )
                })}
            </div>
            <div className={styles.episodesBtn}>
                <SButton variant="section">View all episodes</SButton>
            </div>
        </React.Fragment>
    )
}

export default EpisodesSection
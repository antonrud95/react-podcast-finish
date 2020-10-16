import React from 'react'
import styles from './videos-section.module.scss'

import FC from '~/types/fc'
// import SButton from '../../ui/general/button/button.component'
import InfoItem from '~/components/ui/general/info-item/info-item.component'
import { VideosType } from '~/types/videos.type'

interface Props {
    videos: VideosType[]
}

const VideosSection: FC<Props> = ({videos}) => {
    return (
        <React.Fragment>
            <h2 className={styles.videosMainTitle}>latest video</h2>
            <div className={styles.videosContainer}>
                {videos.map((video: VideosType, index) => {
                    return (
                        <InfoItem
                            key={video.id} 
                            title={video.title}
                            text={video.description}
                            image={video.image.childImageSharp.fluid}
                            componentWrapper={styles.videosItemWrapper}
                            imageWrapperStyles={styles.videosImageWrapper}
                            imageStyles={styles.videosImage}
                            infoTitleStyles={styles.videosTitle}
                            infoTextStyles={styles.videosText}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default VideosSection
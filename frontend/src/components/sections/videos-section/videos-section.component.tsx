import React from 'react'
import styles from './videos-section.module.scss'

import FC from '~/types/fc'
import SButton from '../../ui/general/button/button.component'
import InfoItem from '~/components/ui/general/info-item/info-item.component'
import { VideosType } from '~/types/videos.type'

import { useWindowDimensions } from '~/hooks/useWindowDimensions';

interface Props {
    videos: VideosType[]
}

const VideosSection: FC<Props> = ({videos}) => {
    const { width } = useWindowDimensions();
    return (
        <React.Fragment>
            <h2 className={styles.videosMainTitle}>latest video</h2>
            <div className={styles.videosContainer}>
                {width <= 767 ? videos.map((video: VideosType, index) => {
                    if (index > 2) {
                        return
                    } else {
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
                    }
                }) :
                    videos.map((video: VideosType, index) => {
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
                    })
                }
            </div>
            {width <= 767 && <SButton variant="section" className={styles.videosMainBtn}>View all videos</SButton>}
        </React.Fragment>
    )
}

export default VideosSection
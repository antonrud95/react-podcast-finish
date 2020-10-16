import React from 'react'

import Img from 'gatsby-image'
import FC from '~/types/fc'
import { FluidObject } from 'gatsby-image'
import Social from '~/components/ui/general/social-media/social-nedia.component'

interface Props {
    title: string
    text: string
    image: FluidObject
    imageWrapperStyles: string
    imageStyles: string
    infoTitleStyles: string
    infoTextStyles: string
    componentWrapper: string
    isSocial?: boolean
    socialWrapper?: string
    icon?: string
}

const InfoItem: FC<Props> = ({title, text, image, imageWrapperStyles, imageStyles, infoTitleStyles, infoTextStyles, componentWrapper, isSocial, socialWrapper, icon}) => {
    return (
        <div className={componentWrapper}>
            <div className={imageWrapperStyles}>
                <Img fluid={image} className={imageStyles}/>
            </div>
            <h3 className={infoTitleStyles}>{title}</h3>
            <p className={infoTextStyles}>{text}</p>
            {isSocial && <Social socialWrapper={socialWrapper} icon={icon} />}
        </div>
    )
}

export default InfoItem
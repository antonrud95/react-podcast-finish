import React from 'react'

import Img from 'gatsby-image'
import FC from '~/types/fc'
import { FluidObject } from 'gatsby-image'

interface Props {
    title: string
    text: string
    image: FluidObject
    imageWrapperStyles: string
    imageStyles: string
    infoTitleStyles: string
    infoTextStyles: string
    componentWrapper: string
}

const InfoItem: FC<Props> = ({title, text, image, imageWrapperStyles, imageStyles, infoTitleStyles, infoTextStyles, componentWrapper}) => {
    return (
        <div className={componentWrapper}>
            <div className={imageWrapperStyles}>
                <Img fluid={image} className={imageStyles}/>
            </div>
            <h3 className={infoTitleStyles}>{title}</h3>
            <p className={infoTextStyles}>{text}</p>
        </div>
    )
}

export default InfoItem
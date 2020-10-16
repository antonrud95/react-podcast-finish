import React from 'react'

import FacebookIcon from '~/assets/icons/social-media/facebook.svg'
import InstagramIcon from '~/assets/icons/social-media/instagram.svg'
import TwitterIcon from '~/assets/icons/social-media/twitter.svg'
import YoutebeIcon from '~/assets/icons/social-media/youtube.svg'

import FC from '~/types/fc'

interface Props {
    socialWrapper: string
    icon: string
}

const Social: FC<Props> = ({socialWrapper, icon}) => {
    return (
        <div className={socialWrapper}>
            <FacebookIcon className={icon}/>
            <InstagramIcon className={icon}/>
            <TwitterIcon className={icon}/>
            <YoutebeIcon className={icon}/>
        </div>
    )
}

export default Social
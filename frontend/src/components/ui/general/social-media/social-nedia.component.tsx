import React from 'react'

import FacebookIcon from '~/assets/icons/social-media/facebook.svg'
import InstagramIcon from '~/assets/icons/social-media/instagram.svg'
import TwitterIcon from '~/assets/icons/social-media/twitter.svg'
import YoutebeIcon from '~/assets/icons/social-media/youtube.svg'

import FC from '~/types/fc'

interface Props {
    socialWrapper: string
    facebook: string
    instagram: string
    twitter: string
    youtube: string
}

const Social: FC<Props> = ({socialWrapper, facebook, instagram, twitter, youtube}) => {
    return (
        <div className={socialWrapper}>
            <FacebookIcon className={facebook}/>
            <InstagramIcon className={instagram}/>
            <TwitterIcon className={twitter}/>
            <YoutebeIcon className={youtube}/>
        </div>
    )
}

export default Social
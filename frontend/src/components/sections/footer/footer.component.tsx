import React from 'react'
import styles from './footer.module.scss'
import Social from '~/components/ui/general/social-media/social-nedia.component'

const Footer = () => {
    return (
        <div>
            <h2 className={styles.footerTitle}>you can find us at</h2>
            <div className={styles.footerWrapper}>
                <Social 
                    socialWrapper={styles.footerSocialWrapper}
                    icon={styles.footerIcon}
                />
                <p className={styles.footerText}>@nerdsatnight</p>
            </div>
            
        </div>
    )
}

export default Footer
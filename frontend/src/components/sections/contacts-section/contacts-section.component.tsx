import React from 'react'
import styles from './contacts-section.module.scss'

import FC from '~/types/fc'
// import SButton from '../../ui/general/button/button.component'
import InfoItem from '~/components/ui/general/info-item/info-item.component'
import { ContactsType } from '~/types/contacts.type'
import Social from '~/components/ui/general/social-media/social-nedia.component'

interface Props {
    contacts: ContactsType[]
}

const ContactsSection: FC<Props> = ({contacts}) => {
    return (
        <React.Fragment>
            <h2 className={styles.contactsMainTitle}>who we are</h2>
            <p className={styles.contactsMainDescription}>
                Being a nerd is one of the most enjoyable things in life. The world is full of various curiosities, passions and adventures —
                so let's explore it in good company. The podcast is intended for adults metrically, though you don’t have to feel mature. We regularly revolve around scientific curiosities and interesting hobbies, you can also learn something about creating games and retrocomputing, lick the demoscene and learn about the consequences of the series' addiction.
            </p>
            <div className={styles.contactsContainer}>
                {contacts.map((contact: ContactsType, index) => {
                    return (
                        <InfoItem
                            key={contact.id} 
                            title={contact.name}
                            text={contact.description}
                            image={contact.image.childImageSharp.fluid}
                            componentWrapper={styles.contactsItemWrapper}
                            imageWrapperStyles={styles.contactsImageWrapper}
                            imageStyles={styles.contactsImage}
                            infoTitleStyles={styles.contactsTitle}
                            infoTextStyles={styles.contactsText}
                        />
                    )
                })}
                <Social 
                    socialWrapper={styles.contactSocialWrapper}
                    facebook={styles.contactFacebook}
                    instagram={styles.contactInstagram}
                    twitter={styles.contactTwitter}
                    youtube={styles.contactYoutube}
                />
            </div>
        </React.Fragment>
    )
}

export default ContactsSection
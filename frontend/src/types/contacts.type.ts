export interface ContactsType {
    id: string
    name: string
    description: string
    image: {
        childImageSharp: any
      } 
}
export interface Contacts {
    allStrapiContacts: {
        nodes: ContactsType[]
    }
}
  
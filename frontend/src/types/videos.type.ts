export interface VideosType {
    id: string
    title: string
    description: string
    image: {
        childImageSharp: any
      } 
}
export interface Videos {
    allStrapiVideos: {
        nodes: VideosType[]
    }
}
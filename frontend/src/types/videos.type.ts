export interface VideosType {
    id: string
    title: string
    description: string
    image: {
        childImageSharp: any
      } 
}
export interface Episodes {
    allStrapiVideos: {
        nodes: VideosType[]
    }
}
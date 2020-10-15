export interface SeriesType {
    id: string
    title: string
    description: string
    image: {
      childImageSharp: any
    }
    
  }
  export interface Series {
    allStrapiSeries: {
      nodes: SeriesType[]
    }
  }
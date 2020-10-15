export interface EpisodesType {
    id: string
    title: string
    text: string
    
  }
  export interface Episodes {
    allStrapiEpisodes: {
      nodes: EpisodesType[]
    }
  }
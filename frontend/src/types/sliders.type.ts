export interface SlidersType {
    id: string
    uppertitlefirst: string
    uppertitlesecond: string
    title: string
    description: string
    
  }
  export interface Slider {
    allStrapiSliders: {
      nodes: SlidersType[]
    }
  }
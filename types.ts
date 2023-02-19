export interface IPokemonCard {
  id: number,
  picture: string,
  name: string,
  author: {
    name: string,
    picture: string
  },
  price?: number,
}

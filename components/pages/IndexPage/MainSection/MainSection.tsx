import s from './MainSection.module.scss'
import {PrimaryButton} from "@components/shared/PrimaryButton/PrimaryButton";
import RocketIcon from '@assets/icons/RocketLaunch.svg'
import {PokemonCard} from "@components/shared/PokemonCard/PokemonCard";
import {IPokemonCard} from "../../../../types";
import CardPic from '@assets/images/card.jpg'
import Avatar from '@assets/images/avatar.gif'

const stats = [
  {
    value: '240k+',
    title: 'Total Sale'
  },
  {
    value: '100k+',
    title: 'Auctions'
  },
  {
    value: '240k+',
    title: 'Artists'
  }
]

const tempPokemonCard: IPokemonCard = {
  id: 1,
  name: 'Pickachu',
  picture: CardPic.src,
  author: {
    name: 'Artemy',
    picture: Avatar.src
  },
  price: 50.99
}

export const MainSection = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <h1 className={s.title}>Discover Digital Art & Collect NFTs</h1>
          <p className={s.desc}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
            than 20k NFT artists.</p>
          <PrimaryButton icon={RocketIcon} className={s.button}>Get Started</PrimaryButton>
          <div className={s.stats}>
            {stats.map((item, i) => {
              return <div key={i} className={s.statsItem}>
                <span className={s.statsValue}>{item.value}</span>
                <span className={s.statsTitle}>{item.title}</span>
              </div>
            })}
          </div>
        </div>
        <div className={s.pic}>
          <PokemonCard card={tempPokemonCard} className={s.card}/>
        </div>
      </div>
    </div>
  );
};

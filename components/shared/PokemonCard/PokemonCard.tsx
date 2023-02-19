import s from './PokemonCard.module.scss'
import {FC} from "react";
import {IPokemonCard} from "types";
import clsx from "clsx";

interface PokemonCardProps {
  card: IPokemonCard,
  className: string
}

export const PokemonCard: FC<PokemonCardProps> = ({card: {picture, author, price, name}, className}) => {
  return (
    <div className={clsx(s.card, className)} style={{backgroundImage: `url(${picture})`}}>
      <div className={s.info}>
        <div className={s.mainInfo}>
          <span className={s.title}>{name}</span>
          <div className={s.author}>
            <img className={s.authorPic} src={author.picture} alt={`${author.name} avatar`}/>
            <span className={s.authorName}>{author.name}</span>
          </div>
        </div>
        {price && <div className={s.price}>
					<span className={s.priceLabel}>Price</span>
					<span className={s.priceValue}>${price}</span>
				</div>}
      </div>
    </div>
  );
};

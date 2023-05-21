import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { ButtonInput } from '@components/shared/ButtonInput/ButtonInput';
import { Logo } from '@components/shared/Logo/Logo';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

import s from './Footer.module.scss';

import DiscordIcon from 'assets/icons/DiscordLogo.svg';
import InstagramIcon from 'assets/icons/InstagramLogo.svg';
import TwitterIcon from 'assets/icons/TwitterLogo.svg';
import YouTubeIcon from 'assets/icons/YoutubeLogo.svg';

const socials = [
  {
    link: 'https://discord.com',
    icon: DiscordIcon,
  },
  {
    link: 'https://youtube.com',
    icon: YouTubeIcon,
  },
  {
    link: 'https://twitter.com',
    icon: TwitterIcon,
  },
  {
    link: 'https://instagram.com',
    icon: InstagramIcon,
  },
];

const links = [
  {
    text: 'Shop',
    link: '/shop',
  },
];

export const Footer = () => {
  return (
    <ContentWrapper className={s.footerWrapper}>
      <div className={s.footer}>
        <div className={s.content}>
          <div className={clsx(s.column, s.mainColumn)}>
            <Logo className={s.columnTitle} compact={false} />
            <p className={s.commonText}>
              Collect, trade, and explore NFT Pokemons.
            </p>
            <p className={s.communityText}>Join our community</p>
            <div className={s.socials}>
              {socials.map((item, i) => {
                return (
                  <a
                    className={s.socNet}
                    href={item.link}
                    target="_blank"
                    key={i}
                  >
                    <ReactSVG src={item.icon.src} className={s.icon} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={s.column}>
            <span className={s.columnTitle}>Explore</span>
            <div className={s.links}>
              {links.map((item, i) => {
                return (
                  <Link className={s.link} href={item.link} key={i}>
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={clsx(s.column, s.digest)}>
            <span className={s.columnTitle}>Join our weekly digest</span>
            <p className={s.digestText}>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <ButtonInput
              buttonText="Subscribe"
              placeholder={'Enter your email here'}
              onSubmit={(v) => console.log(v)}
              name="email"
            />
          </div>
        </div>
        <div className={s.copyright}>Ⓒ Pokemon Store 2023</div>
      </div>
    </ContentWrapper>
  );
};

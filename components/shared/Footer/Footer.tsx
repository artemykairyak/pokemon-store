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
    link: 'discord',
    icon: DiscordIcon,
  },
  {
    link: 'youtube',
    icon: YouTubeIcon,
  },
  {
    link: 'twitter',
    icon: TwitterIcon,
  },
  {
    link: 'instagram',
    icon: InstagramIcon,
  },
];

const links = [
  {
    text: 'Marketplace',
    link: '/marketplace',
  },
  {
    text: 'Statistics',
    link: '/stats',
  },
];

export const Footer = () => {
  return (
    <ContentWrapper className={s.footerWrapper}>
      <div className={s.footer}>
        <div className={s.content}>
          <div className={clsx(s.column, s.mainColumn)}>
            <Logo className={s.columnTitle} />
            <p className={s.commonText}>
              Pokemon Store UI created with Anima for Figma.
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

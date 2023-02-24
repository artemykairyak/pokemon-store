import UserIcon from '@assets/icons/User.svg';
import { Logo } from '@components/shared/Logo/Logo';
import { PrimaryButton } from '@components/shared/PrimaryButton/PrimaryButton';
import Link from 'next/link';

import s from './Header.module.scss';


const headerLinks = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Statistics',
    link: '/stats',
  },
];

export const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <nav className={s.nav}>
        <ul className={s.list}>
          {headerLinks.map((item, i) => {
            return (
              <li className={s.listItem}>
                <Link className={s.link} key={i} href={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <PrimaryButton icon={UserIcon}>Sign Up</PrimaryButton>
      </nav>
    </div>
  );
};

import UserIcon from '@assets/icons/User.svg';
import { UserButton } from '@components/shared/Header/components/UserButton/UserButton';
import { Logo } from '@components/shared/Logo/Logo';
import { Button } from '@components/shared/PrimaryButton/Button';
import { AuthContext } from '@context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import s from './Header.module.scss';


const headerLinks = [
  {
    title: 'Shop',
    link: '/shop',
  },
];

export const Header = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const onLoginBtnClick = async () => {
    await router.push('/auth');
  };

  return (
    <div className={s.header}>
      <Logo />
      <nav className={s.nav}>
        <ul className={s.list}>
          {headerLinks.map((item, i) => {
            return (
              <li className={s.listItem} key={i}>
                <Link className={s.link} href={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {user ? (
          <UserButton user={user} />
        ) : (
          <Button type="secondary" icon={UserIcon} onClick={onLoginBtnClick}>
            Login
          </Button>
        )}
      </nav>
    </div>
  );
};

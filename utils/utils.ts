import { ApolloError } from '@apollo/client';
import DiscordLogo from '@assets/icons/DiscordLogo.svg';
import InstagramLogo from '@assets/icons/InstagramLogo.svg';
import TwitterLogo from '@assets/icons/TwitterLogo.svg';
import WebLogo from '@assets/icons/WebLogo.svg';
import YoutubeLogo from '@assets/icons/YoutubeLogo.svg';
import * as avatars from '@assets/icons/avatars';
import { statsKeys } from '@constants/constants';
import { Stats } from '@graphqlTypes/graphql';


export const getGraphQLErrors = (error?: ApolloError) => {
  if (!error) {
    return '';
  }

  return error.graphQLErrors.map(({ message }) => message).join(', ');
};

export const getRandomAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  return Object.values(avatars)[randomNumber].src;
};

export const getLinkLogoByType = (type: string) => {
  switch (type) {
    case 'discord':
      return DiscordLogo.src;
    case 'youtube':
      return YoutubeLogo.src;
    case 'twitter':
      return TwitterLogo.src;
    case 'instagram':
      return InstagramLogo.src;
    default:
      return WebLogo.src;
  }
};

export const getStatsArray = (stats?: Stats[]) => {
  if (!stats?.length) {
    return null;
  }

  const resArr = [];

  for (const key in stats[0]) {
    const _key = statsKeys[key as keyof typeof statsKeys];
    if (_key) {
      // @ts-ignore
      resArr.push({ title: _key, value: stats[0][key] });
    }
  }

  return resArr;
};

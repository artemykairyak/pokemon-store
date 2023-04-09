import { ApolloError } from '@apollo/client';
import DiscordLogo from '@assets/icons/DiscordLogo.svg';
import InstagramLogo from '@assets/icons/InstagramLogo.svg';
import TwitterLogo from '@assets/icons/TwitterLogo.svg';
import WebLogo from '@assets/icons/WebLogo.svg';
import YoutubeLogo from '@assets/icons/YoutubeLogo.svg';
import * as avatars from '@assets/icons/avatars';


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

export const getLinkTypeIdByType = (type: string) => {
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

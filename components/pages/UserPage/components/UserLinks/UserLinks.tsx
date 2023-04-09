import { useMutation } from '@apollo/client';
import DoneIcon from '@assets/icons/DoneIcon.svg';
import EditIcon from '@assets/icons/EditIcon.svg';
import PlusIcon from '@assets/icons/PlusIcon.svg';
import { UserComponentProps } from '@components/pages/UserPage/types';
import { CREATE_LINK, REMOVE_LINK, UPDATE_LINK } from '@graphql/queries/links';
import { GET_USER_BY_USERNAME } from '@graphql/queries/users';
import { CreateLinkInput, Link, UpdateLinkInput } from '@graphqlTypes/graphql';
import { getLinkLogoByType } from '@utils/utils';
import clsx from 'clsx';
import { ChangeEvent, FC, useMemo, useState } from 'react';
import { ReactSVG } from 'react-svg';

import s from './UserLinks.module.scss';


const links = [
  {
    type: 'web',
    logo: getLinkLogoByType('web'),
  },
  {
    type: 'discord',
    logo: getLinkLogoByType('discord'),
  },
  {
    type: 'youtube',
    logo: getLinkLogoByType('youtube'),
  },
  {
    type: 'twitter',
    logo: getLinkLogoByType('twitter'),
  },
  {
    type: 'instagram',
    logo: getLinkLogoByType('instagram'),
  },
];

export const UserLinks: FC<UserComponentProps> = ({ user, editable }) => {
  const refetchUserVars = {
    query: GET_USER_BY_USERNAME,
    variables: { username: user?.username },
  };

  const [createLink] = useMutation<
    { createLink: Link },
    { input: CreateLinkInput }
  >(CREATE_LINK);
  const [updateLink] = useMutation<
    { updateLink: boolean },
    { input: UpdateLinkInput }
  >(UPDATE_LINK);
  const [removeLink] = useMutation<{ removeLink: Link }, { type: string }>(
    REMOVE_LINK,
  );

  const [isUpdatingMode, setIsUpdatingMode] = useState(false);
  const [newLink, setNewLink] = useState<{
    type: string;
    value: string;
    new?: boolean;
  }>({
    value: '',
    type: '',
  });
  const isAddBtnDisplayed = editable && user.links;

  const nonUserLinks = useMemo(() => {
    return links.filter((link) => {
      return !user.links?.some((userLink) => userLink.type.name === link.type);
    });
  }, [user.links]);

  const getNonUserLinksWidth = (count: number) => {
    if (!isUpdatingMode) {
      return '0px';
    }

    return `${count * 32 + 15 * count - 15}px`;
  };

  const onCloseEditBtnClick = () => {
    if (isUpdatingMode) {
      setIsUpdatingMode(false);
      setNewLink({ type: '', value: '' });
      return;
    }

    setIsUpdatingMode(true);
  };

  const onSaveLink = async () => {
    const input = { input: { url: newLink.value, type: newLink.type } };

    if (!newLink.new) {
      const { data } = await updateLink({
        variables: input,
        refetchQueries: [refetchUserVars],
      });

      if (data?.updateLink) {
        setIsUpdatingMode(false);
      }
    } else {
      const { data } = await createLink({
        variables: input,
        refetchQueries: [refetchUserVars],
      });

      if (data?.createLink) {
        setIsUpdatingMode(false);
      }
    }

    setNewLink({ type: '', value: '', new: false });
  };

  const onDeleteLink = async () => {
    const { data } = await removeLink({
      variables: { type: newLink.type },
      refetchQueries: [refetchUserVars],
    });

    if (data?.removeLink) {
      setIsUpdatingMode(false);
    }
  };

  return (
    <>
      <div className={s.links}>
        {user.links?.map((link) => {
          return (
            <a
              className={clsx(s.link, { [s.edit]: isUpdatingMode })}
              href={isUpdatingMode ? undefined : link.url}
              key={link.id}
              target="_blank"
              title={link.type.name}
            >
              <ReactSVG
                src={getLinkLogoByType(link.type.name)}
                className={s.icon}
              />
              {isUpdatingMode && (
                <button
                  className={s.editBtn}
                  onClick={() =>
                    setNewLink({
                      type: link.type.name,
                      value: link.url,
                      new: false,
                    })
                  }
                >
                  <ReactSVG src={EditIcon.src} className={s.editIcon} />
                </button>
              )}
            </a>
          );
        })}
        <div
          style={{ width: getNonUserLinksWidth(nonUserLinks.length) }}
          className={clsx(s.nonUserLinks, {
            [s.hidden]: !isUpdatingMode,
          })}
        >
          {nonUserLinks.map((link) => {
            return (
              <button
                className={clsx(s.link, s.nonUserLink)}
                key={`nonUser-${link.type}`}
                title={link.type}
                onClick={() =>
                  setNewLink({ type: link.type, value: '', new: true })
                }
              >
                <ReactSVG src={getLinkLogoByType(link.type)} />
              </button>
            );
          })}
        </div>
        {isAddBtnDisplayed && (
          <button
            className={clsx(s.addBtn, { [s.closeBtn]: isUpdatingMode })}
            onClick={onCloseEditBtnClick}
          >
            <ReactSVG src={PlusIcon.src} className={s.addIcon} />
          </button>
        )}
      </div>
      {newLink.type && isUpdatingMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSaveLink();
          }}
          className={s.newLink}
        >
          <label className={s.newLinkLabel} htmlFor="newLink">
            Enter link
          </label>
          <ReactSVG
            src={getLinkLogoByType(newLink.type)}
            className={s.newLinkIcon}
          />
          <input
            type="text"
            id="newLink"
            className={s.newLinkInput}
            value={newLink.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewLink((prev) => ({ ...prev, value: e.target.value }))
            }
          />
          <button type="submit" className={s.saveBtn} disabled={!newLink.value}>
            <ReactSVG src={DoneIcon.src} className={s.saveIcon} />
          </button>
          {!newLink.new && (
            <button className={s.deleteBtn} onClick={onDeleteLink}>
              Delete Link
            </button>
          )}
        </form>
      )}
    </>
  );
};

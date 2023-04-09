import { AuthContext } from '@context/AuthContext';
import { User } from '@graphqlTypes/graphql';
import { useContext, useEffect, useState } from 'react';


export const useUser = (user?: User) => {
  const { user: loggedUser } = useContext(AuthContext);
  const [isMe, setIsMe] = useState(false);

  useEffect(() => {
    setIsMe(user?.id === loggedUser?.id);
  }, [user, loggedUser]);

  return { isMe };
};

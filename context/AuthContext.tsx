import { useQuery } from '@apollo/client';
import { LS_ACCESS_TOKEN } from '@constants/constants';
import { UserWithoutPassword } from '@customTypes/types';
import { ME } from '@graphql/queries/auth';
import { User } from '@graphqlTypes/graphql';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';


interface AuthContext {
  user: UserWithoutPassword | null;
  setUser: Dispatch<SetStateAction<UserWithoutPassword | null>>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<UserWithoutPassword | null>(null);
  const { data, error } = useQuery<{ me: User }>(ME);

  useEffect(() => {
    if (data?.me) {
      const { username, id, email } = data.me;
      setUser({ username, id, email });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem(LS_ACCESS_TOKEN);
      setUser(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

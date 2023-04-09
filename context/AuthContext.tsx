import { LS_ACCESS_TOKEN } from '@constants/constants';
import { ME } from '@graphql/queries/auth';
import { MeQueryVariables, User } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
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
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [me, error, loading] = useAppQuery<MeQueryVariables, User>(ME);

  useEffect(() => {
    if (me) {
      setUser(me);
    }
  }, [me]);

  useEffect(() => {
    if (!loading && error && !user) {
      localStorage.removeItem(LS_ACCESS_TOKEN);
      setUser(null);
    }
  }, [loading, error, user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

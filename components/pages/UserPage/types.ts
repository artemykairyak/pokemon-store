import { User } from '@graphqlTypes/graphql';

export interface UserComponentProps {
  user: User;
  editable?: boolean;
}

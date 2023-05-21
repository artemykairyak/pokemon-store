import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '@graphql/mutations/users';
import { GET_USER_BY_USERNAME } from '@graphql/queries/users';
import { UpdateUserInput, User } from '@graphqlTypes/graphql';

export const useUpdateUser = (user?: User | null) => {
  const [updateUser] = useMutation<
    { updateUser: User },
    { input: UpdateUserInput }
  >(UPDATE_USER, {
    refetchQueries: [
      {
        query: GET_USER_BY_USERNAME,
        variables: { username: user?.username },
      },
    ],
  });

  return { updateUser };
};

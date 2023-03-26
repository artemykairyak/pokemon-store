import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from '@apollo/client';

export const useAppQuery = <TVariables extends OperationVariables, TResult>(
  queryString: DocumentNode,
  variables?: TVariables,
  options?: Omit<QueryHookOptions<DocumentNode, TVariables>, 'variables'>,
): [TResult | undefined, boolean, string[] | undefined] => {
  let errors;
  const { data, loading, error } = useQuery<DocumentNode, TVariables>(
    queryString,
    {
      variables,
      ...options,
    },
  );

  if (typeof data === 'object') {
    return [Object.values(data)[0], loading, undefined];
  }

  if (error) {
    if (error?.graphQLErrors.length) {
      errors = error?.graphQLErrors.map((graphQLError) => graphQLError.message);
    } else {
      errors = [error?.message];
    }
  }

  return [data, loading, errors];
};

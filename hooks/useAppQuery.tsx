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
): [TResult | undefined, string[] | undefined, boolean] => {
  let errors;
  const { data, loading, error } = useQuery<DocumentNode, TVariables>(
    queryString,
    {
      variables,
      ...options,
    },
  );

  if (typeof data === 'object') {
    return [Object.values(data)[0], undefined, loading];
  }

  if (error) {
    if (error?.graphQLErrors.length) {
      errors = error?.graphQLErrors.map((graphQLError) => graphQLError.message);
    } else {
      errors = [error?.message];
    }
  }

  return [data, errors, loading];
};

import { gql } from '@apollo/client';


const BASE_LINK_FIELDS = gql`
  fragment BaseLinkFields on Link {
    id
    type {
      id
      name
    }
    url
  }
`;

export const CREATE_LINK = gql`
  ${BASE_LINK_FIELDS}
  mutation createLink($input: CreateLinkInput!) {
    createLink(createLinkInput: $input) {
      ...BaseLinkFields
    }
  }
`;

export const UPDATE_LINK = gql`
  ${BASE_LINK_FIELDS}
  mutation updateLink($input: UpdateLinkInput!) {
    updateLink(updateLinkInput: $input) {
      ...BaseLinkFields
    }
  }
`;

export const REMOVE_LINK = gql`
  mutation removeLink($type: String!) {
    removeLink(type: $type)
  }
`;

import {gql} from "@apollo/client";

export const GET_ALL_CARDS = gql`
    query {
        getAllCards {
            id, name, picture, author {
                id, name, picture
            }
        }
    }
`;

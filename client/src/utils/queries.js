import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bio
            image
            reviewCount

            reviews {
                _id
                reviewText
                createdAt
                commentCount
                comments {
                    _id
                    createdAt
                    commentBody
                    username
                }
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            bio
            image
            reviewCount

            reviews {
                _id
                reviewText
                createdAt
                commentCount
            }
        }
    }
`;
import { gql } from '@apollo/client';

const GET_CHARACTER_INFO = gql`
  query Characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        type
        gender
        species
        status
        location {
          id
          name
        }
        origin {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;

export default GET_CHARACTER_INFO;
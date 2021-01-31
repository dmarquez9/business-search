import { gql } from "@apollo/client";

export const SEARCH_BUSINESS = gql`
  query getSearch(
    $term: String,
    $location: String,
    $offset: Int
  ) {
    search(
      term: $term
      location: $location
      limit: 10
      offset: $offset
    ) {
      total
      business {
        name
        id
        phone
        review_count
        rating
        photos
        location {
          city
          state
          country
          address1
        }
      }
    }
  }
`;

import gql from "graphql-tag";

export const Validators = gql`
  query {
    validators {
      id
      operatorAddress
      consensusPubKey
    }
  }
`


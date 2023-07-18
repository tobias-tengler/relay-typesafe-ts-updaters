import {graphql} from 'react-relay'

graphql`fragment testAssignableUser on User @assignable {
  __typename
}`

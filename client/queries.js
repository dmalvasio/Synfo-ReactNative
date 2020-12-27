import gql from "graphql-tag";

// export const GET_USERS = gql`
//   query getListUsers {
//     users @rest(type: "Users", path: "/users") {
//       data
//     }
//   }
// `;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($info: String!) {
    login(email: $email, password: $password, body: $info)
      @rest(type: "Post", path: "/login", method: "POST", bodyKey: "body") {
      token
    }
  }
`;

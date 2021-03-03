import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query getMovies {
    movies @rest(type: "Movies", path: "/movies") {
      data
    }
  }
`;

export const GET_MOVIE_INFO = gql`
  query getMovieInfo {
    movieInfo @rest(type: "MovieInfo", path: "/movieInfo") {
      data
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query getNotifications {
    notifications @rest(type: "Notifications", path: "/notifications") {
      data
    }
  }
`;

export const GET_PROFILE = gql`
  query getProfileData {
    profile @rest(type: "Profile", path: "/profile") {
      data
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($info: String!) {
    login(email: $email, password: $password, body: $info)
      @rest(type: "Post", path: "/login", method: "POST", bodyKey: "body") {
      token
    }
  }
`;

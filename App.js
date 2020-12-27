import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import SynfoNavigator from "./navigation/SynfoNavigator";
import { client } from "./client/Index";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SynfoNavigator />
    </ApolloProvider>
  );
}

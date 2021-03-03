import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import SynfoNavigator from "./navigation/SynfoNavigator";
import { client } from "./client/Index";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar style="dark" />
      <SynfoNavigator />
    </ApolloProvider>
  );
}

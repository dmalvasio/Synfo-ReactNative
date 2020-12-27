import React, { useState, useContext } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { GET_USERS, LOGIN_MUTATION } from "../../client/queries";
import { AuthContext } from "../../context/AuthContext";

export default LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  //const { loading, data } = useQuery(GET_USERS);
  const [loginRequest] = useMutation(LOGIN_MUTATION);

  const onPressLogin = () => {
    loginRequest({ variables: { info: { email, password } } }).then(
      ({
        data: {
          login: { token },
        },
      }) => {
        login(token);
      }
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Login</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity onPress={onPressLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

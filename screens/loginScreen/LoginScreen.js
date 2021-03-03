import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  Text,
  Platform,
  SafeAreaView,
} from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION } from "../../client/Queries";
import { AuthContext } from "../../context/AuthContext";

import FormInput from "../../components/formInput/FormInput";
import FormButton from "../../components/formButton/FormButton";
import styles from "./Styles";
import { SYNFO } from "../../constants/Strings";

export default LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
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
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{SYNFO}</Text>

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="account-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock-outline"
          secureTextEntry={true}
        />

        <FormButton buttonTitle="LOGIN" onPress={onPressLogin} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

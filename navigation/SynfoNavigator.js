import React, { useReducer, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigationRef } from "./RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../context/AuthContext";

import LoginScreen from "../screens/loginScreen/LoginScreen";
import Menu from "./DrawerMenu";
import TabNavigation from "./TabNavigation";
import { LOGIN } from "../constants/Screens";
import Loading from "../components/loading/Loading";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SynfoNavigator = () => {
  const initialLoginState = {
    isLoading: true,
    token: null,
  };

  const loginReducer = (state, action) => {
    switch (action.type) {
      case "REGISTER_TOKEN":
        return {
          token: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          token: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          token: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("@token");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "REGISTER_TOKEN", token: userToken });
    }, 1000);
  }, []);

  const authContext = useMemo(
    () => ({
      login: async (token) => {
        try {
          await AsyncStorage.setItem("@token", token);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGIN", token });
      },
      logout: async () => {
        try {
          await AsyncStorage.removeItem("@token");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  if (loginState.isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        {loginState.token ? (
          <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name={"Drawer"} component={TabNavigation} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name={LOGIN} component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default SynfoNavigator;

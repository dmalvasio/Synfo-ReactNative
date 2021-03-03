import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import { HOME, MOVIE_INFO, NOTIFICATIONS, PROFILE } from "../constants/Screens";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import NotificationScreen from "../screens/notificationScreen/NotificationScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import MovieInfo from "../screens/movieInfoScreen/MovieInfoScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={HOME} component={HomeScreen} />
    <Stack.Screen name={MOVIE_INFO} component={MovieInfo} />
  </Stack.Navigator>
);

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarLabel: () => null,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === HOME) {
          iconName = "home";
        } else if (route.name === NOTIFICATIONS) {
          iconName = "bell";
        } else {
          iconName = "account";
        }

        return (
          <MaterialCommunityIcons
            size={25}
            name={iconName}
            color={focused ? "#01cdfe" : "gray"}
          />
        );
      },
    })}
    tabBarOptions={{
      style: { backgroundColor: "#262626" },
    }}
  >
    <Tab.Screen name={HOME} component={HomeStack} />
    <Tab.Screen name={NOTIFICATIONS} component={NotificationScreen} />
    <Tab.Screen name={PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigation;

import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

import { HOME, PROFILE, NOTIFICATIONS } from "../constants/Screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./DrawerStyles";

const DrawerItem = ({ onPress, iconName, titleName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={iconName} size={20} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt}>{titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Menu = (props) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <TouchableOpacity>
          <View style={styles.userContainer}>
            <Image
              style={styles.userImage}
              source={require("../assets/synfo.jpg")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItem
        iconName="home"
        titleName="Home"
        onPress={() => props.navigation.navigate(HOME)}
      />
      <DrawerItem
        iconName="bell"
        titleName="Notifications"
        onPress={() => props.navigation.navigate(NOTIFICATIONS)}
      />
      <DrawerItem
        iconName="account"
        titleName="Profile"
        onPress={() => props.navigation.navigate(PROFILE)}
      />
      <DrawerItem iconName="logout" titleName="Logout" onPress={logout} />
    </View>
  );
};

export default Menu;

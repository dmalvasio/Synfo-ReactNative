import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

import Icon from "react-native-vector-icons/FontAwesome";
import s from "./NavigatorStyle";
import { HOME } from "../constants/Screens";

const DrawerItem = ({ onPress, iconName, titleName }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.menuContainer}>
        <View style={s.iconContainer}>
          <Icon size={17} name={iconName} />
        </View>
        <View style={s.titleContainer}>
          <Text style={s.titleTxt}>{titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Menu = (props) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image
              style={s.userImage}
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
      <DrawerItem iconName="user" titleName="Logout" onPress={logout} />
    </View>
  );
};

export default Menu;

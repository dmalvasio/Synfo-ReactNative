import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const MenuButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <View>
        <MaterialCommunityIcons size={35} name="menu" color="darkgrey" />
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;

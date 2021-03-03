import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.pop()}>
      <View>
        <MaterialCommunityIcons size={35} name="arrow-left" color="darkgrey" />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

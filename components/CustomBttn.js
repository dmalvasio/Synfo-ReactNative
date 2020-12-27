import * as React from "react";
import * as RootNavigation from "../navigation/RootNavigation";
import { Text, TouchableOpacity } from "react-native";
import Color from "../constants/Colors";

export default function CustomBttn({ name, dest }) {
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        width: 200,
        height: 50,
        backgroundColor: Color.primary,
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
      }}
      onPress={() => RootNavigation.navigate(dest)}
    >
      <Text style={{ color: Color.white, fontSize: 20 }}>{name}</Text>
    </TouchableOpacity>
  );
}

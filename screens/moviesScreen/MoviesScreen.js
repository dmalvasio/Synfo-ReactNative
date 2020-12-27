import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Color from "../../constants/Colors";

export default function MovieScreen() {
  return (
    <View>
      <FlatList data={} renderItem={} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    backgroundColor: Color.primary,
  },
});

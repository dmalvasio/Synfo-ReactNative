import React from "react";
import { View, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./Styles";

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <MaterialCommunityIcons name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

import React from "react";
import { View, Image } from "react-native";

import styles from "./Styles";

const FavMovieProfile = ({ urlImg }) => {
  return (
    <View style={styles.moviesImageContainer}>
      <Image
        source={{ uri: urlImg }}
        style={styles.image}
        resizeMode="cover"
      ></Image>
    </View>
  );
};

export default FavMovieProfile;

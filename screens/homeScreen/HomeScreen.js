import * as React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

import Color from "../../constants/Colors";

const DUMMY_MOVIE = [
  {
    id: "1",
    title: "Avengers",
    imageUrl:
      "https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg",
  },
  {
    id: "2",
    title: "Dunkirk",
    imageUrl:
      "https://filmschoolrejects.com/wp-content/uploads/2017/08/dunkirk-burning-plane-1280x720.jpg",
  },
  {
    id: "3",
    title: "The Nun",
    imageUrl:
      "https://blog.personal.com.py/wp-content/uploads/2018/09/the-nun-estreno-cines-paraguay.jpg",
  },
  {
    id: "4",
    title: "Wallstreet",
    imageUrl:
      "https://media.newyorker.com/photos/590951571c7a8e33fb38a2e8/16:9/w_1280,c_limit/wallstreet-580.jpg",
  },
];

const renderMovieCard = ({ item }) => {
  return (
    <View style={styles.cards}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.description}>{item.title}</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Movies</Text>
      </View>
      <FlatList
        style={styles.list}
        data={DUMMY_MOVIE}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  cards: {
    padding: 20,
  },
  text: {
    color: Color.primary,
    fontWeight: "bold",
    fontSize: 28,
  },
  header: {
    backgroundColor: "#262626",
    width: "100%",
    height: 90,
    paddingTop: 36,
    paddingBottom: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    backgroundColor: "#262626",
    color: Color.primary,
    padding: 12,
    fontSize: 17,
  },
  image: {
    width: "100%",
    height: 150,
  },
});

import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@apollo/react-hooks";

import { GET_MOVIES } from "../../client/Queries";
import { MOVIE_INFO } from "../../constants/Screens";
import Loading from "../../components/loading/Loading";
import MenuButton from "../../components/menuButton/MenuButton";
import styles from "./Styles";
import { HOME } from "../../constants/Strings";

const renderMovieCard = (item, navigation) => {
  return (
    <View style={styles.cards} key={item.id}>
      <TouchableOpacity onPress={() => navigation.navigate(MOVIE_INFO)}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const { loading, data } = useQuery(GET_MOVIES);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={navigation} />
        <Text style={styles.text}>{HOME}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data.movies.data}
        renderItem={({ item }) => renderMovieCard(item, navigation)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;

import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Video } from "expo-av";
import { useQuery } from "@apollo/react-hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BackButton from "../../components/backButton/BackButton";
import { GET_MOVIE_INFO } from "../../client/Queries";
import Loading from "../../components/loading/Loading";
import styles from "./Styles";
import { MOVIE_DETAIL } from "../../constants/Strings";

const MovieInfoScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { loading, data } = useQuery(GET_MOVIE_INFO);

  if (loading) {
    return <Loading />;
  }

  const { id, title, synop, trailer } = data.movieInfo.data;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton navigation={navigation} />
        <Text style={styles.text}>{MOVIE_DETAIL}</Text>
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/avengers.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.titleH}>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons size={30} name="cards-heart" color="red" />
      </View>
      <View>
        <Text style={styles.synopsis}>{synop}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieInfoScreen;

import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./Styles";
import { GET_PROFILE } from "../../client/queries";
import FavMovieProfile from "../../components/favMovieProfile/FavMovieProfile";
import Loading from "../../components/loading/Loading";
import MenuButton from "../../components/menuButton/MenuButton";
import {
  PROFILE,
  COMMENTS,
  FOLLOWERS,
  FOLLOWING,
} from "../../constants/Strings";

const ProfileScreen = ({ navigation }) => {
  const { loading, data } = useQuery(GET_PROFILE);

  if (loading) {
    return <Loading />;
  }

  const {
    city,
    comments,
    country,
    followers,
    following,
    name,
    profileImg,
    favCounts,
    favMovies,
  } = data.profile.data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <MenuButton navigation={navigation} />
          <Text style={styles.headerTitle}>{PROFILE}</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: profileImg }}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          <View style={styles.add}>
            <MaterialCommunityIcons
              size={26}
              name="account-edit"
              color="darkgrey"
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileCountry}>
            {city}, {country}
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={styles.wText}>{comments}</Text>
            <Text style={(styles.wText, styles.subText)}>{COMMENTS}</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={styles.wText}>{followers}</Text>
            <Text style={(styles.wText, styles.subText)}>{FOLLOWERS}</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={styles.wText}>{following}</Text>
            <Text style={[styles.wText, styles.subText]}>{FOLLOWING}</Text>
          </View>
        </View>
        <View style={{ marginTop: 32 }}>
          <FlatList
            horizontal
            data={favMovies}
            renderItem={({ item }) => (
              <FavMovieProfile urlImg={item.imageUrl} />
            )}
          />
          <View style={styles.moviesCount}>
            <Text style={styles.wText}>{favCounts}</Text>
            <Text style={styles.wText}>FAVORITES</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

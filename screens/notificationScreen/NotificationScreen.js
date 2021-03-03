import React from "react";
import { View, Text, FlatList, Image, SafeAreaView } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import styles from "./Styles";
import { GET_NOTIFICATIONS } from "../../client/Queries";
import Loading from "../../components/loading/Loading";
import MenuButton from "../../components/menuButton/MenuButton";
import { NOTIFICATIONS } from "../../constants/Strings";

const renderNotificationList = ({ item }) => {
  return (
    <View style={styles.cards}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default function NotificationScreen({ navigation }) {
  const { loading, data } = useQuery(GET_NOTIFICATIONS);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={navigation} />
        <Text style={styles.text}>{NOTIFICATIONS}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data.notifications.data}
        renderItem={renderNotificationList}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

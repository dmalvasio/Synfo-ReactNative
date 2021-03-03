import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    flexGrow: 1,
    textAlign: "center",
    color: "#01cdfe",
    fontWeight: "bold",
    fontSize: 28,
  },
  header: {
    height: 90,
    paddingTop: 36,
    paddingBottom: 26,
    paddingHorizontal: 20,
    marginRight: 35,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    backgroundColor: "#262626",
    color: "#ffffff",
    padding: 12,
    fontSize: 17,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

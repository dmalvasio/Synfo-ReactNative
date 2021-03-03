import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
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
  video: {
    alignSelf: "center",
    width: 380,
    height: 200,
  },
  title: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: "#FFF",
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  titleH: {
    height: 90,
    paddingTop: 36,
    paddingBottom: 26,
    marginRight: 35,
    alignItems: "center",
    flexDirection: "row",
  },
  synopsis: {
    alignItems: "center",
    color: "#FFF",
    paddingHorizontal: 30,
    fontSize: 15,
  },
});

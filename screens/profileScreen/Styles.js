import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
  wText: {
    color: "#ffffff",
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
  },
  headerTitle: {
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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  profileName: {
    fontWeight: "200",
    fontSize: 32,
    color: "#ffffff",
  },
  profileCountry: {
    color: "#c9c9c9",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  moviesCount: {
    backgroundColor: "#414448",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  image: {
    flex: 1,
  },
});

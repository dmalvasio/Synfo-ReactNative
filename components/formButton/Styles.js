import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils/Dimentions";

export default StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#01cdfe",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "center", //align vertically
    alignItems: "center", //align horizontally
    borderRadius: 20, //make it rounded, half of height
  },
  container: {
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default styles;

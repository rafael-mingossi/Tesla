import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", //will resize the image in case doesnt fit the screen
    position: "absolute", //will keep the image in the background without pushing the other compenents to the bottom
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50, //this will position from the bottom to top
    width: "100%",
  },
});

export default styles;

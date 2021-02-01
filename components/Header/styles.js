import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100, //this will bring the header to the front, ahead of carList
    flexDirection: "row", //this will make the logo and menu in the same row
    justifyContent: "space-between", //this will create space between logo and menu
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain", //this will make the logo appear
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default styles;

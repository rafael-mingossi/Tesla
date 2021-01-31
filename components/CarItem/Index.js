import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton/Index.js";

const CarItem = (props) => {
  const { name, tagline, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        //source={require("../../assets/images/ModelX.jpeg")} //move back 2 times until find assets folder
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subtitle}> {tagline} </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Orders"}
          onPress={() => {
            console.warn("order pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("inventory pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

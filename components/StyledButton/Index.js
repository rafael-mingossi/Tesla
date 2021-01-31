import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  //const type = props.type;
  //const content = props.content; //this will print the button name dainamically, getting from content in CarItem/Index
  //const onPress = props.onPress; //this will print the warn message to screen dainamically, getting from onPress in CarItem/Index

  //another way to write the 3 lines above using ES6
  const { type, content, onPress } = props;

  //conditional if in ternary expression, adressing to a variable
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFFA6" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        //to merge 2 styles, use an array []
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}> {content} </Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

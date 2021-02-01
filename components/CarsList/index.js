import React from "react";
import { View, Dimensions, FlatList } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem/Index.js";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      {/* to use FlatList we pass 2 props, data will receive the array and renderItem will receive the items to be displayed, in this case will be CarItem */}
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item, index) => index.toString()} //this will solve the keyExtractor warning
        showsVerticalScrollIndicator={false} //hide scroll bar
        //auto center the image to start position
        snapToAlignment={"start"} //set the direction of alignment
        decelerationRate={"fast"} //speed of efect
        snapToInterval={Dimensions.get("window").height} //get the height of the image for the efect
      />
    </View>
  );
};

export default CarsList;

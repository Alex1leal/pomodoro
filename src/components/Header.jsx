import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  //This code defines a function called handlesPress that takes an index parameter.
  //It sets a new time value based on the index: if the index is 0, the new time is 25; if the index is 1, the new time is 5; otherwise, the new time is 15.
  // It then updates the current time and sets the time value to the new time in minutes.
  function handlesPress(index) {
   
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlesPress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index
              ? { borderColor: "transparent" }
              : { borderColor: "black", backgroundColor: "white" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    borderWidth: 3,
    padding: 5,
    width: "33%",
    borderRadius: 15,
    alignItems: "center",
  },
});

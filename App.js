import {
  StyleSheet,
  Text,
  Platform,
  View,
  Button,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
const Colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState(
    "Pomodoro" | "Short Break" | "Long Break"
  );

  const [isActive, setIsActive] = useState(false);


  function handleStart() {
    setIsActive(!isActive);
  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors[currentTime] }]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>

        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {isActive ? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
   
    backgroundColor: "#333333",
    marginTop: 15,
    paddingTop: 15,
    padding: 15, 
    borderRadius: 15,
  },
});

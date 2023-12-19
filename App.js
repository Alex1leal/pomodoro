import {
  StyleSheet,
  Text,
  Platform,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
const Colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState(
    "Pomodoro" | "Short Break" | "Long Break"
  );
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors[currentTime] }]}
    >
      <View style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
        <Text style={styles.text}>Pomodoro</Text>

        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Text style={styles.text}>{time}</Text>
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
});

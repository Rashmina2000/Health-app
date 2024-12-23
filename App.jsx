import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navigation from "./components/Navigation/Navigation";
// import Login from "../components/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

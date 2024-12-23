import React from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Login() {
  return (
    <SafeAreaView>
      <Image
        source={require("./../assets/Health-logo.png")}
        style={styles.logo}
      />
      <Text>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button style={styles.login_button} color="#C62E2E" title="Login" />
      {/* <TouchableOpacity style={styles.login_button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
      <Text>
        Haven't Registered?{"  "}
        <Text style={{ color: "#007BFF", textDecorationLine: "underline" }}>
          Register Here
        </Text>
      </Text>
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
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    margin: 10,
  },
  login_button: {
    backgroundColor: "#C62E2E",
    width: "100",
  },
});

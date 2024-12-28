import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  const validate = () => {
    let errors = {};

    // Username validation
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    // Password validation
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" }); // Clear error when user starts typing
  };

  const handleLogin = () => {
    if (validate()) {
      navigation.navigate("Home", { username: formData.username });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, formErrors.username ? styles.inputError : null]}
        placeholder="Username"
        //value={username}
        onChangeText={(value) => handleInputChange("username", value)}
      />
      {formErrors.username ? (
        <Text style={styles.errorText}>{formErrors.username}</Text>
      ) : null}
      <TextInput
        style={[styles.input, formErrors.password ? styles.inputError : null]}
        placeholder="Password"
        //value={password}
        onChangeText={(value) => handleInputChange("password", value)}
        secureTextEntry
      />
      {formErrors.password ? (
        <Text style={styles.errorText}>{formErrors.password}</Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  inputError: {
    borderColor: "#ff0000",
  },
  errorText: {
    color: "#ff0000",
    fontSize: 12,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  button: {
    backgroundColor: "#C62E2E",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

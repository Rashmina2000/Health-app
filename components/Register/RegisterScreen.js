import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    let errors = {};

    // Username validation
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    // Password validation
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" }); // Clear error when user starts typing
  };

  const handleRegister = () => {
    if (validate()) {
      Alert.alert(
        "Registration Successful!",
        `Details:\nUsername: ${formData.username}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={[styles.input, formErrors.username ? styles.inputError : null]}
        placeholder="Username"
        value={formData.username}
        onChangeText={(value) => handleInputChange("username", value)}
      />
      {formErrors.username ? (
        <Text style={styles.errorText}>{formErrors.username}</Text>
      ) : null}

      <TextInput
        style={[styles.input, formErrors.email ? styles.inputError : null]}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
      />
      {formErrors.email ? (
        <Text style={styles.errorText}>{formErrors.email}</Text>
      ) : null}

      <TextInput
        style={[
          styles.input,
          formErrors.phoneNumber ? styles.inputError : null,
        ]}
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        keyboardType="phone-pad"
      />
      {formErrors.phoneNumber ? (
        <Text style={styles.errorText}>{formErrors.phoneNumber}</Text>
      ) : null}

      <TextInput
        style={[styles.input, formErrors.password ? styles.inputError : null]}
        placeholder="Password"
        value={formData.password}
        onChangeText={(value) => handleInputChange("password", value)}
        secureTextEntry
      />
      {formErrors.password ? (
        <Text style={styles.errorText}>{formErrors.password}</Text>
      ) : null}

      <TextInput
        style={[
          styles.input,
          formErrors.confirmPassword ? styles.inputError : null,
        ]}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChangeText={(value) => handleInputChange("confirmPassword", value)}
        secureTextEntry
      />
      {formErrors.confirmPassword ? (
        <Text style={styles.errorText}>{formErrors.confirmPassword}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
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

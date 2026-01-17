import Button from "@/components/Button";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const LoginScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("@/assets/images/vector.svg")} />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.description}>Keep track of your tasks</Text>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter your Email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.inputField}
              secureTextEntry
              placeholder="Enter your Password"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Button
          title="Log in"
          buttonContainerStyles={styles.buttonContainer}
          buttonTextStyles={styles.buttonText}
          buttonStyles={styles.button}
          onPress={() => router.push("/(tabs)/TaskScreen")}
        />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f3",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
    // gap: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#50c3ca",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  formContainer: {
    gap: 20,
  },
  inputContainer: {
    marginBottom: 4,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
    marginLeft: 4,
  },
  inputField: {
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    fontSize: 16,
    color: "#1F2937",
  },
});

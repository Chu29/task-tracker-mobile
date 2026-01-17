import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignUpScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={require("@/assets/images/vector.svg")} />
        </View>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.description}>
              Create an account to get started
            </Text>
          </View>

          {/* Form Container */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              {/* First Name */}
              <Text style={styles.labelText}>First Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your First Name"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            </View>

            {/* Last Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Last Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your Last Name"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </View>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <View>
              <Text style={styles.labelText}>Confirm Password</Text>
              <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Confirm your Password"
                placeholderTextColor="#9CA3AF"
                value={confirmPass}
                onChangeText={(text) => setConfirmPass(text)}
              />
            </View>

            <Button
              title="Sign Up"
              buttonContainerStyles={styles.buttonContainer}
              buttonTextStyles={styles.buttonText}
              buttonStyles={styles.button}
              onPress={() => router.push("../LoginScreen")}
            />

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <Text
                style={styles.loginLink}
                onPress={() => router.push("../LoginScreen")}
              >
                Login
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f3",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 32,
    gap: 16,
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
  buttonContainer: {
    width: "100%",
    backgroundColor: "#50c3ca",
    borderRadius: 8,
    marginTop: 8,
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  loginText: {
    fontSize: 16,
    color: "#374151",
  },
  loginLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#50c3ca",
  },
});

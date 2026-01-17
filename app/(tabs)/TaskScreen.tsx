import Button from "@/components/Button";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Add Task"
        buttonContainerStyles={styles.buttonContainer}
        buttonTextStyles={styles.buttonText}
        buttonStyles={styles.button}
        onPress={() => console.log("add task")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.subtitle}>Your active tasks will appear here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f3",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },
  buttonContainer: {
    width: "50%",
    backgroundColor: "#50c3ca",
    borderRadius: 8,
    margin: 4,
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
});

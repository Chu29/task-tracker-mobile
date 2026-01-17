import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={require("@/assets/images/vector.svg")} />
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/splash-screen.jpg")}
              style={styles.image}
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.title}>Welcome to Task Tracker</View>
            <Text style={styles.description}>
              Organize your tasks, boost your productivity, and achieve your
              goals with ease.
            </Text>
          </View>

          <Button
            title="Get Started"
            buttonContainerStyles={styles.buttonContainer}
            buttonTextStyles={styles.buttonText}
            buttonStyles={styles.button}
            onPress={() => router.push("../SignUpScreen")}
          />
        </View>
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
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
    justifyContent: "space-between",
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
});

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import useAuth from "../hooks/useAuth";
import SignInForm from "../auth/SignInForm";

const LoginScreen = () => {
  const { signIn } = useAuth();

  const handleSignIn = async (values) => {
    try {
      await signIn(values.email, values.password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <SignInForm onSubmit={handleSignIn} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

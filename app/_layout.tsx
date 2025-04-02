import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Alert, Button } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        Alert.alert("Error", "Biometric authentication is not available.");
        setAuthenticated(true); // Allow access if no biometric is available
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to continue",
        fallbackLabel: "Use PIN",
      });

      if (result.success) {
        setAuthenticated(true);
      } else {
        Alert.alert("Authentication Failed", "Please try again.");
      }

      setChecking(false);
    };

    authenticateUser();
  }, []);

  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!authenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Try Again" onPress={() => setChecking(true)} />
      </View>
    );
  }

  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden = {true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* the above one hides the (tabs) header display */}

        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

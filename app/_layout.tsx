import { Stack } from "expo-router";
import './global.css'
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return <Stack>
     <Stack.Screen 
      name="(tabs)"
      options={{headerShown: false}}
     />
     {/* the above one hides the (tabs) header display */}

     <Stack.Screen 
      name="movies/[id]"
      options={{headerShown : false}}
     />
  </Stack>
}

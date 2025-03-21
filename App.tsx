import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from "./src/Routes";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { 
  LuckiestGuy_400Regular
} from '@expo-google-fonts/luckiest-guy';
import { ControllerProvider } from "./src/Hooks/controller";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    LuckiestGuy_400Regular
  });

  if (!fontsLoaded) return null;

  return (
    <ControllerProvider>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        {/* <StatusBar style="dark" />
        <Routes/> */}
      </View>
    </ControllerProvider>

  );
}


import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import { useController } from '../Hooks/controller';
import Logo from '../Assets/Images/Design.png'
import { IMAGEAPP, PRESSABLEAPP } from '../Components/_Styles';
import TapFast from '../Pages/TapFast';
import HeaderRight from '../Components/HeaderRight';
import On from '../Pages/On';
import { useNavigation } from '@react-navigation/native';
import theme from '../Global/Styles/theme';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  const navigation = useNavigation<any>()
  const {isFinishAnimated} = useController()
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: isFinishAnimated,
        headerTransparent: true, // Torna o header transparente
        headerStyle: {
          backgroundColor: 'transparent', // Define o fundo como transparente
        },
        headerShadowVisible: false, // Remove qualquer sombra visível
        headerRight: () => <HeaderRight/>,
        headerLeft: () => <PRESSABLEAPP onPress={() => navigation.navigate('Home')}><IMAGEAPP borderWidth={2} borderColor={theme.base.base_4} width={50} height={50} borderRadius={100} marginLeft={10} source={Logo}></IMAGEAPP></PRESSABLEAPP>,
        animation: 'slide_from_left',
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: '',
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen 
        name="TapFast" 
        component={TapFast} 
        options={{
          title: '',
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen 
        name="On" 
        component={On} 
        options={{
          title: '',
          animation: 'slide_from_left',
        }}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
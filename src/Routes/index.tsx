import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import AppRoutes from './app.routes'
import theme from '../Global/Styles/theme';

function Routes() {


  const tapFastTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      primary: theme.base.base_2,
      background: theme.base.base_2,
      card: 'rgb(18, 18, 18)',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer 
      theme={tapFastTheme}
    >
      <AppRoutes/>
    </NavigationContainer>
  )
}

export default Routes;
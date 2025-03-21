import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing, 
  runOnJS 
} from 'react-native-reanimated';
import { CENTERAPP } from '../../Components/_Styles';
import theme from '../../Global/Styles/theme';
import Banner from '../../Assets/Images/Banner.png';
import { useController } from '../../Hooks/controller';

const Home = () => {
  const {setIsFinishAnimated} = useController();
  const scale = useSharedValue(0.5); // Começa pequeno

  useEffect(() => {
    scale.value = withTiming(6, { 
      duration: 6000, 
      easing: Easing.out(Easing.exp) 
    }, () => {
      runOnJS(setIsFinishAnimated)(true);
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <CENTERAPP width={100} height={100} backgroundColor={theme.base.base_2}>
      <Animated.Image
        source={Banner} // Substitua pelo caminho correto da logo
        style={[styles.logo, animatedStyle]}
      />
    </CENTERAPP>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default Home;

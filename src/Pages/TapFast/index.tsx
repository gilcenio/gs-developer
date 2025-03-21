import React, { useRef, useState } from 'react';
import { 
  ScrollView, 
  Linking,
  View,
} from 'react-native';
import { BOXAPP, BUTTONAPP, CENTERAPP, HSTACKAPP, IMAGEAPP } from '../../Components/_Styles';
import BannerAd from '../../Assets/Images/BannerAd.png'
import Banner02 from '../../Assets/Images/2.png'
import Banner03 from '../../Assets/Images/3.png'
import Banner04 from '../../Assets/Images/4.png'
import Banner05 from '../../Assets/Images/5.png'
import { ResizeMode, Video } from 'expo-av';
import VideoStart from '../../Assets/Videos/start.mp4'  
import Play from '../../Assets/Videos/Play.mp4'  
import Caracter from '../../Assets/Videos/Caracter.mp4'  
import theme from '../../Global/Styles/theme';
import useResponsive from '../../Context/useResponsive';
import {Ionicons} from '@expo/vector-icons'


export default function TapFast() {
  const { responsiveHeight, responsiveWidth } = useResponsive();

  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    BannerAd,
    Banner02,
    Banner03,
    Banner04,
    Banner05,
  ];

  const openGameLink = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.gilceniosantos.tapitfast');
  };

  // Função para avançar para o próximo slide ou voltar ao início
  const goToNextSlide = () => {
    if (scrollViewRef.current) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < slides.length) {
        scrollViewRef.current.scrollTo({ x: 0, y: nextIndex * responsiveHeight(100), animated: true });
        setCurrentIndex(nextIndex);
      } else {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
        setCurrentIndex(0);
      }
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        ref={scrollViewRef}
        style={{ flex: 1 }} 
        showsVerticalScrollIndicator={false} 
        pagingEnabled
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.y / responsiveHeight(100));
          setCurrentIndex(index);
        }}
      >
        <HSTACKAPP width={100} height={100} alignItems='center'>
          <IMAGEAPP source={BannerAd} width={responsiveWidth(100)} height={responsiveHeight(100)}/>
        </HSTACKAPP>

        <HSTACKAPP width={100} height={100} alignItems='center'>
          <CENTERAPP left={10} zIndex={10} width={20} height={90} position='absolute' backgroundColor={'transparent'} borderRadius={10}>
            <BOXAPP width={'100%'} height={2.5} backgroundColor={theme.base.base_5} position='absolute' zIndex={10} borderTopLeftRadius={20} borderTopRightRadius={20} top={0}/>
            <Video
              videoStyle={{
                width: '100%',
                height: "100%",
              }}
              style={{
                width: '100%',
                height: "100%",
                borderRadius: 20,
              }}
              source={VideoStart}
              resizeMode={ResizeMode.STRETCH}
              isLooping
              shouldPlay           
            />
          </CENTERAPP>

          <IMAGEAPP source={Banner02} width={responsiveWidth(100)} height={responsiveHeight(100)}  />
        </HSTACKAPP>

        <HSTACKAPP width={100} height={100} alignItems='center'>
          <CENTERAPP right={10} zIndex={10} width={20} height={90} position='absolute' backgroundColor={'transparent'} borderRadius={10}>
            <Video
              videoStyle={{
                width: '100%',
                height: "100%",
              }}
              style={{
                width: '100%',
                height: "100%",
                borderRadius: 20
              }}
              source={Play}
              resizeMode={ResizeMode.STRETCH}
              isLooping
              shouldPlay           
            />
          </CENTERAPP>

          <IMAGEAPP source={Banner03} width={responsiveWidth(100)} height={responsiveHeight(100)}/>
        </HSTACKAPP>

        <HSTACKAPP width={100} height={100} alignItems='center'>
          <CENTERAPP right={10} zIndex={10} width={20} height={90} position='absolute' backgroundColor={'transparent'} borderRadius={10}>
            <Video
              videoStyle={{
                width: '100%',
                height: "100%",
              }}
              style={{
                width: '100%',
                height: "100%",
                borderRadius: 20
              }}
              source={Caracter}
              resizeMode={ResizeMode.STRETCH}
              isLooping
              shouldPlay           
            />
          </CENTERAPP>

          <IMAGEAPP source={Banner04} width={responsiveWidth(100)} height={responsiveHeight(100)}/>
        </HSTACKAPP>

        <HSTACKAPP width={100} height={100}>
          <IMAGEAPP source={Banner05} width={responsiveWidth(100)} height={responsiveHeight(100)}/>

          <BUTTONAPP
            onPress={openGameLink}  
            fontSize={1} 
            fontColor={theme.base.base_2} 
            zIndex={10} 
            position='absolute'
            left={5}
            bottom={20}
            label={'Google Play'}
            elevation={10}
            backgroundColor={theme.base.base_4}
            paddingHorizontal={2}
            fontFamily='LuckiestGuy_400Regular'
            leftIcon={<Ionicons name="logo-google-playstore" size={24} color={theme.base.base_2} style={{marginRight: 10}}/>}
          />
        </HSTACKAPP>
      </ScrollView>

      <BUTTONAPP
        onPress={goToNextSlide}  
        fontSize={1} 
        fontColor={theme.base.base_2} 
        zIndex={10} 
        position='absolute'
        left={1}
        bottom={2}
        label={currentIndex === slides.length - 1 ? 'Voltar ao Início' : 'Próximo'}
        backgroundColor={theme.base.base_4}
        paddingHorizontal={2}
        fontFamily='LuckiestGuy_400Regular'
      />
    </View>
  );
}

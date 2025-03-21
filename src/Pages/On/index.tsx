import React, { useRef, useState } from 'react';
import { 
  ScrollView,
  View, 
} from 'react-native';
import { BUTTONAPP, HSTACKAPP, IMAGEAPP } from '../../Components/_Styles';
import On1 from '../../Assets/Images/On1.png'
import On2 from '../../Assets/Images/On2.png'
import On3 from '../../Assets/Images/On3.png'
import On4 from '../../Assets/Images/On4.png'
import useResponsive from '../../Context/useResponsive';
import theme from '../../Global/Styles/theme';


export default function On() {
  const { responsiveHeight, responsiveWidth } = useResponsive();

  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    On1,
    On2,
    On3,
    On4,
  ];

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
        <HSTACKAPP width={100} height={95} alignItems='center'>
          <IMAGEAPP source={On1} width={responsiveWidth(100)} height={responsiveHeight(100)}/>
        </HSTACKAPP>

        <HSTACKAPP width={100} height={95} alignItems='center'>
          <IMAGEAPP source={On2} width={responsiveWidth(100)} height={responsiveHeight(100)}  />
        </HSTACKAPP>

        <HSTACKAPP width={100} height={95} alignItems='center'>
          <IMAGEAPP source={On3} width={responsiveWidth(100)} height={responsiveHeight(100)}/>
        </HSTACKAPP>

        <HSTACKAPP width={100} height={95} alignItems='center'>
          <IMAGEAPP source={On4} width={responsiveWidth(100)} height={responsiveHeight(100)}/>
        </HSTACKAPP>
      </ScrollView>

      <BUTTONAPP
        onPress={goToNextSlide}  
        fontSize={1} 
        fontColor={theme.text.text_2} 
        zIndex={10} 
        position='absolute'
        right={1}
        bottom={2}
        label={currentIndex === slides.length - 1 ? 'Voltar ao Início' : 'Próximo'}
        backgroundColor={theme.base.base_4}
        paddingHorizontal={2}
        fontFamily='Ubuntu_700Bold'
      />
    </View>
  );
}

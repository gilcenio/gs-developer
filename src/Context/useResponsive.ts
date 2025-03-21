import { useWindowDimensions } from "react-native";

export default function useResponsive() {
  const { height, width } = useWindowDimensions();

  function responsiveWidth(value?: number | string) {
    if (value === undefined || isNaN(Number(value))) {
      return null; // Retorna null se o value for undefined, não for um número ou não puder ser convertido para número
    }
    return width * (Number(value) / 100);
  }

  function responsiveHeight(value?: number | string) {
    if (value === undefined || isNaN(Number(value))) {
      return null; // Retorna null se o value for undefined, não for um número ou não puder ser convertido para número
    }
    return height * (Number(value) / 100);
  }

  return {
    responsiveWidth,
    responsiveHeight,
  };
}
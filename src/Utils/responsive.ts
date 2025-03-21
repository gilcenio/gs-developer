import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');


const cachedWidths: { [key: string]: number } = {};
const cachedHeights: { [key: string]: number } = {};

export const responsiveWidth = (percent: number | string): number => {
  const cacheKey = `${percent}`;
  if (cachedWidths[cacheKey] !== undefined) {
    return cachedWidths[cacheKey];
  }

  const elemWidth = typeof percent === "number" ? percent : parseFloat(percent);
  const calculatedWidth = Math.round(width * elemWidth / 100);
  const adjustedWidth = PixelRatio.roundToNearestPixel(calculatedWidth);

  cachedWidths[cacheKey] = adjustedWidth;
  return adjustedWidth;
}

export const responsiveHeight = (percent: number | string): number => {
  const cacheKey = `${percent}`;
  if (cachedHeights[cacheKey] !== undefined) {
    return cachedHeights[cacheKey];
  }

  const elemHeight = typeof percent === "number" ? percent : parseFloat(percent);
  const calculatedHeight = Math.round(height * elemHeight / 100);
  const adjustedHeight = PixelRatio.roundToNearestPixel(calculatedHeight);

  cachedHeights[cacheKey] = adjustedHeight;
  return adjustedHeight;
}

export const responsiveFontSize = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * PixelRatio.getFontScale());
}

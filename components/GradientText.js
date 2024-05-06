import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { LinearGradient, Text as SvgText, Defs, Stop } from 'react-native-svg';

const GradientText = ({ text, colors, fontSize }) => {
  const gradientId = 'gradientId';

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <Stop key={index} offset={(index * 100) / (colors.length - 1) + '%'} stopColor={color} />
            ))}
          </LinearGradient>
        </Defs>
        <SvgText fontSize={fontSize} fill={`url(#${gradientId})`} fontWeight="bold">
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200, // Set width and height as needed
    height: 50,
  },
});

export default GradientText;
